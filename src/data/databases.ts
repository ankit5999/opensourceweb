// types.ts

import { Database } from "@/types";

export const databases: Database[] = [
    {
        id: 'mongodb',
        name: 'MongoDB',
        content: [
            { type: 'title', text: 'Installation' },
            { type: 'paragraph', text: 'Install the MongoDB package along with BuildMyMeta to integrate metadata logging with MongoDB.' },
            {
                type: 'code',
                language: 'bash',
                code: 'npm install build-my-meta mongoose\n# Or, using Yarn\nyarn add build-my-meta mongoose\n# Or, using pnpm\npnpm add build-my-meta mongoose'
            },

            { type: 'title', text: 'Database Structure' },
            { type: 'paragraph', text: 'Metadata entries in MongoDB will have the following structure:' },
            {
                type: 'code',
                language: 'json',
                code: `{
    "userId": "string",
    "apiMethod": "string",
    "metadata": {
        "action": "string",
        "...": "any additional fields"
    },
    "status": "string",
    "error": {
        "message": "string",
        "stack": "string"
    },
    "responseMessage": "string",
    "responseTime": "number",
    "ip": "string",
    "userAgent": "string",
    "headers": {
        "...": "headers as key-value pairs"
    },
    "timestamp": "date"
}`
            },

            { type: 'title', text: 'Automatic Metadata Logging' },
            { type: 'paragraph', text: 'Set up automatic metadata logging in MongoDB. Once configured, metadata will be automatically saved to MongoDB without manual intervention. The `userId` parameter is required in `BuildMyMeta` to identify users for metadata logs, but it can be modified on a per-API basis if needed.' },
            {
                type: 'code',
                language: 'javascript',
                code: `const mongoose = require('mongoose');
const { BuildMyMeta, DB_TYPES } = require('build-my-meta');

// Initialize mongoose
mongoose.connect(process.env.MONGO_URI, { useNewUrlParser: true, useUnifiedTopology: true });

// Use BuildMyMeta with automatic logging (set to true) and pass \`userId\`
app.use(BuildMyMeta(mongoose, DB_TYPES.MONGODB, true, 'defaultUserId'));

// API route example
app.post('/login', (req, res) => {
    // Handle login
    res.send('User logged in');
});`
            },

            { type: 'paragraph', text: 'For a `POST` request to `/login`, here is an example of the metadata automatically saved in MongoDB:' },
            {
                type: 'code',
                language: 'json',
                code: `{
    "userId": "defaultUserId",
    "apiMethod": "POST",
    "metadata": {
        "url": "/login",
        "body": { "username": "exampleUser" },
        "params": {},
        "query": {}
    },
    "status": "200",
    "responseMessage": "User logged in",
    "responseTime": 123,
    "ip": "127.0.0.1",
    "userAgent": "Mozilla/5.0",
    "headers": {
        "content-type": "application/json"
    },
    "timestamp": "2024-11-11T06:30:19.002Z"
}`
            },

            { type: 'title', text: 'Manual Metadata Logging' },
            { type: 'paragraph', text: 'Configure manual logging in MongoDB to control when and what metadata is saved. This allows customization of metadata entries using `LogCustomMetadata` and flexibility to modify metadata for specific conditions.' },
            {
                type: 'code',
                language: 'javascript',
                code: `const mongoose = require('mongoose');
const { BuildMyMeta, LogCustomMetadata, DB_TYPES } = require('build-my-meta');

// Initialize mongoose
mongoose.connect(process.env.MONGO_URI, { useNewUrlParser: true, useUnifiedTopology: true });

// Use BuildMyMeta with manual logging (set to false)
app.use(BuildMyMeta(mongoose, DB_TYPES.MONGODB, false, 'defaultUserId'));

// Manually log metadata
app.post('/login', (req, res, next) => {
    let metadata = {
        userId: 'user123',             // Optional: Overrides defaultUserId for this request
        apiMethod: 'POST',
        metadata: { action: 'User login' },
        status: 201,
    };

    // Call LogCustomMetadata with the initial metadata
    LogCustomMetadata(metadata, req);

    // Example condition: add extra information if the user is not found
    if (!req.body.username) {
        metadata.metadata.error = "Username is missing";
        return next(new Error('Username is required'));
    }

    // Proceed with login processing...
    res.send('User logged in');
});`
            },

            { type: 'paragraph', text: 'In this example, metadata can be modified even after calling `LogCustomMetadata`. This allows dynamic updates to metadata based on conditions within the API logic.' },
            { type: 'paragraph', text: 'For a `POST` request to `/login`, here’s an example of the metadata saved in MongoDB when additional fields are dynamically added:' },
            {
                type: 'code',
                language: 'json',
                code: `{
    "userId": "user123",
    "apiMethod": "POST",
    "metadata": {
        "action": "User login",
        "error": "Username is missing"
    },
    "status": "400",
    "responseMessage": "Username is required",
    "responseTime": 95,
    "ip": "127.0.0.1",
    "userAgent": "Mozilla/5.0",
    "headers": {
        "content-type": "application/json"
    },
    "timestamp": "2024-11-11T06:30:19.002Z"
}`
            },

            { type: 'title', text: 'Using `LogCustomMetadata` for Dynamic Metadata Updates' },
            { type: 'paragraph', text: 'With `LogCustomMetadata`, you can modify the metadata after the initial function call to add specific information. Here’s how to use it effectively:' },
            { type: 'paragraph', text: '1. Define initial metadata: Define essential fields, including `apiMethod`, `metadata`, `status`, and optionally `userId`.' },
            { type: 'paragraph', text: '2. Modify metadata based on conditions: After calling `LogCustomMetadata(metadata, req)`, you can dynamically add to the metadata object based on your API logic.' },
            { type: 'paragraph', text: '3. Finalize the response: The metadata will automatically capture the final response details, including status and error, at the end of the request.' },

            { type: "title", "text": "Metadata Logging to CSV Files" },
            { type: "paragraph", "text": "BuildMyMeta logs metadata to CSV files in your project folder under the directory `buildmymetalogs`. This directory contains four files:" },
            { type: "paragraph", "text": "`metaSuccess.csv` - Stores successfully logged metadata entries processed by BuildMyMeta." },
            { type: "paragraph", "text": "`metaError.csv` - Stores metadata entries with errors or issues encountered during logging in BuildMyMeta." },
            { type: "paragraph", "text": "`apiSuccess.csv` - Logs successful responses for user API calls." },
            { type: "paragraph", "text": "`apiError.csv` - Logs error responses for user API calls." }
        ]
    }
,
    {
        id: 'postgresql',
        name: 'PostgreSQL',
        content: [
            { type: 'title', text: 'Installation' },
            { type: 'paragraph', text: 'Install Sequelize along with BuildMyMeta and PostgreSQL packages for integrating metadata logging with PostgreSQL.' },
            {
                type: 'code',
                language: 'bash',
                code: 'npm install build-my-meta sequelize pg\n# Or, using Yarn\nyarn add build-my-meta sequelize pg\n# Or, using pnpm\npnpm add build-my-meta sequelize pg'
            },

            { type: 'title', text: 'Database Structure' },
            { type: 'paragraph', text: 'Metadata entries in PostgreSQL will have the following structure:' },
            {
                type: 'code',
                language: 'json',
                code: `{
    "userId": "string",
    "apiMethod": "string",
    "metadata": {
        "action": "string",
        "...": "any additional fields"
    },
    "status": "string",
    "error": {
        "message": "string",
        "stack": "string"
    },
    "responseMessage": "string",
    "responseTime": "number",
    "ip": "string",
    "userAgent": "string",
    "headers": {
        "...": "headers as key-value pairs"
    },
    "timestamp": "date"
}`
            },

            { type: 'title', text: 'Automatic Metadata Logging' },
            { type: 'paragraph', text: 'This setup will automatically log metadata entries in PostgreSQL. The `userId` parameter is required in `BuildMyMeta` to identify users for metadata logs, but it can be modified on a per-API basis if needed.' },
            {
                type: 'code',
                language: 'javascript',
                code: `const { Sequelize } = require('sequelize');
const { BuildMyMeta, DB_TYPES } = require('build-my-meta');

// Initialize Sequelize with PostgreSQL
const sequelize = new Sequelize(process.env.POSTGRES_URL, { dialect: 'postgres' });

// Use BuildMyMeta with automatic logging (set to true) and pass \`userId\`
app.use(BuildMyMeta(sequelize, DB_TYPES.POSTGRES, true, 'defaultUserId'));

// API route example
app.post('/login', (req, res) => {
    // Handle login
    res.send('User logged in');
});`
            },

            { type: 'paragraph', text: 'For a `POST` request to `/login`, here is an example of the metadata automatically saved in PostgreSQL:' },
            {
                type: 'code',
                language: 'json',
                code: `{
    "userId": "defaultUserId",
    "apiMethod": "POST",
    "metadata": {
        "url": "/login",
        "body": { "username": "exampleUser" },
        "params": {},
        "query": {}
    },
    "status": "200",
    "responseMessage": "User logged in",
    "responseTime": 123,
    "ip": "127.0.0.1",
    "userAgent": "Mozilla/5.0",
    "headers": {
        "content-type": "application/json"
    },
    "timestamp": "2024-11-11T06:30:19.002Z"
}`
            },

            { type: 'title', text: 'Manual Metadata Logging' },
            { type: 'paragraph', text: 'Enable manual logging with PostgreSQL, which requires calling LogCustomMetadata to log metadata. This allows you to control when and what metadata is saved, with flexibility to modify metadata for specific conditions.' },
            {
                type: 'code',
                language: 'javascript',
                code: `const { Sequelize } = require('sequelize');
const { BuildMyMeta, LogCustomMetadata, DB_TYPES } = require('build-my-meta');

// Initialize Sequelize with PostgreSQL
const sequelize = new Sequelize(process.env.POSTGRES_URL, { dialect: 'postgres' });

// Use BuildMyMeta with manual logging (set to false)
app.use(BuildMyMeta(sequelize, DB_TYPES.POSTGRES, false, 'defaultUserId'));

// Manually log metadata
app.post('/login', (req, res, next) => {
    let metadata = {
        userId: 'user123',             // Optional: Overrides defaultUserId for this request
        apiMethod: 'POST',
        metadata: { action: 'User login' },
        status: 201,
    };

    // Call LogCustomMetadata with the initial metadata
    LogCustomMetadata(metadata, req);

    // Example condition: add extra information if the user is not found
    if (!req.body.username) {
        metadata.metadata.error = "Username is missing";
        return next(new Error('Username is required'));
    }

    // Proceed with login processing...
    res.send('User logged in');
});`
            },

            { type: 'paragraph', text: 'In this example, metadata can be modified even after calling `LogCustomMetadata`. This allows dynamic updates to metadata based on conditions within the API logic.' },
            { type: 'paragraph', text: 'For a `POST` request to `/login`, here’s an example of the metadata saved in PostgreSQL when additional fields are dynamically added:' },
            {
                type: 'code',
                language: 'json',
                code: `{
    "userId": "user123",
    "apiMethod": "POST",
    "metadata": {
        "action": "User login",
        "error": "Username is missing"
    },
    "status": "400",
    "responseMessage": "Username is required",
    "responseTime": 95,
    "ip": "127.0.0.1",
    "userAgent": "Mozilla/5.0",
    "headers": {
        "content-type": "application/json"
    },
    "timestamp": "2024-11-11T06:30:19.002Z"
}`
            },

            { type: 'title', text: 'Using `LogCustomMetadata` for Dynamic Metadata Updates' },
            { type: 'paragraph', text: 'With `LogCustomMetadata`, you can modify the metadata after the initial function call to add specific information. Here’s how to use it effectively:' },
            { type: 'paragraph', text: '1. Define initial metadata: Define essential fields, including `apiMethod`, `metadata`, `status`, and optionally `userId`.' },
            { type: 'paragraph', text: '2. Modify metadata based on conditions: After calling `LogCustomMetadata(metadata, req)`, you can dynamically add to the metadata object based on your API logic.' },
            { type: 'paragraph', text: '3. Finalize the response: The metadata will automatically capture the final response details, including status and error, at the end of the request.' },

            { type: "title", "text": "Metadata Logging to CSV Files" },
            { type: "paragraph", "text": "BuildMyMeta logs metadata to CSV files in your project folder under the directory `buildmymetalogs`. This directory contains four files:" },
            { type: "paragraph", "text": "`metaSuccess.csv` - Stores successfully logged metadata entries processed by BuildMyMeta." },
            { type: "paragraph", "text": "`metaError.csv` - Stores metadata entries with errors or issues encountered during logging in BuildMyMeta." },
            { type: "paragraph", "text": "`apiSuccess.csv` - Logs successful responses for user API calls." },
            { type: "paragraph", "text": "`apiError.csv` - Logs error responses for user API calls." }
        ]
    }
,
    {
        id: 'firebase',
        name: 'Firebase',
        content: [
            { type: 'title', text: 'Installation' },
            { type: 'paragraph', text: 'Install Firebase Admin SDK to enable BuildMyMeta support for Firestore and Realtime Database in Firebase.' },
            {
                type: 'code',
                language: 'bash',
                code: 'npm install build-my-meta firebase-admin\n# Or, using Yarn\nyarn add build-my-meta firebase-admin\n# Or, using pnpm\npnpm add build-my-meta firebase-admin'
            },

            { type: 'title', text: 'Database Structure' },
            { type: 'paragraph', text: 'Metadata entries in Firebase (both Firestore and Realtime Database) will have the following structure:' },
            {
                type: 'code',
                language: 'json',
                code: `{
    "userId": "string",
    "apiMethod": "string",
    "metadata": {
        "action": "string",
        "...": "any additional fields"
    },
    "status": "string",
    "error": {
        "message": "string",
        "stack": "string"
    },
    "responseMessage": "string",
    "responseTime": "number",
    "ip": "string",
    "userAgent": "string",
    "headers": {
        "...": "headers as key-value pairs"
    },
    "timestamp": "date"
}`
            },

            { type: 'title', text: 'Automatic Metadata Logging (Firestore)' },
            { type: 'paragraph', text: 'This setup enables automatic metadata logging for Firestore. Once configured, metadata is automatically stored in Firestore without manual intervention. The `userId` parameter is required in `BuildMyMeta` to identify users for metadata logs but can be modified per API request if needed.' },
            {
                type: 'code',
                language: 'javascript',
                code: `const admin = require('firebase-admin');
const { BuildMyMeta, DB_TYPES } = require('build-my-meta');

// Initialize Firebase
const firebaseApp = admin.initializeApp({
    credential: admin.credential.cert(require('/path/to/serviceAccountKey.json')),
    databaseURL: 'https://your-project-id.firebaseio.com',
});

// Use BuildMyMeta with automatic logging for Firestore
app.use(BuildMyMeta(firebaseApp, DB_TYPES.FIRESTORE, true, 'defaultUserId'));

// API route example
app.post('/login', (req, res) => {
    // Handle login
    res.send('User logged in');
});`
            },

            { type: 'paragraph', text: 'For a `POST` request to `/login`, here is an example of the metadata automatically saved in Firestore:' },
            {
                type: 'code',
                language: 'json',
                code: `{
    "userId": "defaultUserId",
    "apiMethod": "POST",
    "metadata": {
        "url": "/login",
        "body": { "username": "exampleUser" },
        "params": {},
        "query": {}
    },
    "status": "200",
    "responseMessage": "User logged in",
    "responseTime": 123,
    "ip": "127.0.0.1",
    "userAgent": "Mozilla/5.0",
    "headers": {
        "content-type": "application/json"
    },
    "timestamp": "2024-11-11T06:30:19.002Z"
}`
            },

            { type: 'title', text: 'Automatic Metadata Logging (Realtime Database)' },
            { type: 'paragraph', text: 'This setup enables automatic metadata logging for Firebase Realtime Database, storing metadata automatically without needing manual calls.' },
            {
                type: 'code',
                language: 'javascript',
                code: `const admin = require('firebase-admin');
const { BuildMyMeta, DB_TYPES } = require('build-my-meta');

// Initialize Firebase
const firebaseApp = admin.initializeApp({
    credential: admin.credential.cert(require('/path/to/serviceAccountKey.json')),
    databaseURL: 'https://your-project-id.firebaseio.com',
});

// Use BuildMyMeta with automatic logging for Realtime Database
app.use(BuildMyMeta(firebaseApp, DB_TYPES.FIREBASEREALTIME, true, 'defaultUserId'));

// API route example
app.post('/login', (req, res) => {
    // Handle login
    res.send('User logged in');
});`
            },

            { type: 'title', text: 'Manual Metadata Logging (Firestore)' },
            { type: 'paragraph', text: 'Enable manual logging for Firestore. Use LogCustomMetadata to manually store metadata entries, allowing control over when and what metadata is saved.' },
            {
                type: 'code',
                language: 'javascript',
                code: `const admin = require('firebase-admin');
const { BuildMyMeta, LogCustomMetadata, DB_TYPES } = require('build-my-meta');

// Initialize Firebase
const firebaseApp = admin.initializeApp({
    credential: admin.credential.cert(require('/path/to/serviceAccountKey.json')),
    databaseURL: 'https://your-project-id.firebaseio.com',
});

// Use BuildMyMeta with manual logging for Firestore
app.use(BuildMyMeta(firebaseApp, DB_TYPES.FIRESTORE, false, 'defaultUserId'));

// Manually log metadata
app.post('/login', (req, res, next) => {
    let metadata = {
        userId: 'user123',  // Optional: Overrides defaultUserId for this request
        apiMethod: 'POST',
        metadata: { action: 'User login' },
        status: 201,
    };

    // Call LogCustomMetadata with the initial metadata
    LogCustomMetadata(metadata, req);

    // Example condition: add extra information if the user is not found
    if (!req.body.username) {
        metadata.metadata.error = "Username is missing";
        return next(new Error('Username is required'));
    }

    // Proceed with login processing...
    res.send('User logged in');
});`
            },

            { type: 'title', text: 'Manual Metadata Logging (Realtime Database)' },
            { type: 'paragraph', text: 'Enable manual logging for Realtime Database by using LogCustomMetadata to add metadata entries manually.' },
            {
                type: 'code',
                language: 'javascript',
                code: `const admin = require('firebase-admin');
const { BuildMyMeta, LogCustomMetadata, DB_TYPES } = require('build-my-meta');

// Initialize Firebase
const firebaseApp = admin.initializeApp({
    credential: admin.credential.cert(require('/path/to/serviceAccountKey.json')),
    databaseURL: 'https://your-project-id.firebaseio.com',
});

// Use BuildMyMeta with manual logging for Realtime Database
app.use(BuildMyMeta(firebaseApp, DB_TYPES.FIREBASEREALTIME, false, 'defaultUserId'));

// Manually log metadata
app.post('/login', (req, res, next) => {
    let metadata = {
        userId: 'user123',  // Optional: Overrides defaultUserId for this request
        apiMethod: 'POST',
        metadata: { action: 'User login' },
        status: 201,
    };

    // Call LogCustomMetadata with the initial metadata
    LogCustomMetadata(metadata, req);

    // Example condition: add extra information if the user is not found
    if (!req.body.username) {
        metadata.metadata.error = "Username is missing";
        return next(new Error('Username is required'));
    }

    // Proceed with login processing...
    res.send('User logged in');
});`
            },

            { type: 'title', text: 'Using `LogCustomMetadata` for Dynamic Metadata Updates' },
            { type: 'paragraph', text: 'With `LogCustomMetadata`, you can modify the metadata after the initial function call to add specific information. Here’s how to use it effectively:' },
            { type: 'paragraph', text: '1. Define initial metadata: Define essential fields, including `apiMethod`, `metadata`, `status`, and optionally `userId`.' },
            { type: 'paragraph', text: '2. Modify metadata based on conditions: After calling `LogCustomMetadata(metadata, req)`, you can dynamically add to the metadata object based on your API logic.' },
            { type: 'paragraph', text: '3. Finalize the response: The metadata will automatically capture the final response details, including status and error, at the end of the request.' },

            { type: "title", "text": "Metadata Logging to CSV Files" },
            { type: "paragraph", "text": "BuildMyMeta logs metadata to CSV files in your project folder under the directory `buildmymetalogs`. This directory contains four files:" },
            { type: "paragraph", "text": "`metaSuccess.csv` - Stores successfully logged metadata entries processed by BuildMyMeta." },
            { type: "paragraph", "text": "`metaError.csv` - Stores metadata entries with errors or issues encountered during logging in BuildMyMeta." },
            { type: "paragraph", "text": "`apiSuccess.csv` - Logs successful responses for user API calls." },
            { type: "paragraph", "text": "`apiError.csv` - Logs error responses for user API calls." }
        ]
    }
,
    {
        id: 'sqlite',
        name: 'SQLite',
        content: [
            { type: 'title', text: 'Installation' },
            { type: 'paragraph', text: 'Install SQLite3 with Sequelize for SQLite database management.' },
            {
                type: 'code',
                language: 'bash',
                code: 'npm install build-my-meta sequelize sqlite3\n# Or, using Yarn\nyarn add build-my-meta sequelize sqlite3\n# Or, using pnpm\npnpm add build-my-meta sequelize sqlite3'
            },

            { type: 'title', text: 'Database Structure' },
            { type: 'paragraph', text: 'Metadata entries in SQLite will have the following structure:' },
            {
                type: 'code',
                language: 'json',
                code: `{
    "userId": "string",
    "apiMethod": "string",
    "metadata": {
        "action": "string",
        "...": "any additional fields"
    },
    "status": "string",
    "error": {
        "message": "string",
        "stack": "string"
    },
    "responseMessage": "string",
    "responseTime": "number",
    "ip": "string",
    "userAgent": "string",
    "headers": {
        "...": "headers as key-value pairs"
    },
    "timestamp": "date"
}`
            },

            { type: 'title', text: 'Automatic Metadata Logging' },
            { type: 'paragraph', text: 'Automatic metadata logging saves logs without manual intervention. The `userId` parameter is required in `BuildMyMeta` to identify users for metadata logs, but it can be modified on a per-API basis if needed.' },
            {
                type: 'code',
                language: 'javascript',
                code: `const { Sequelize } = require('sequelize');
const { BuildMyMeta, DB_TYPES } = require('build-my-meta');

// Initialize SQLite
const sequelize = new Sequelize({ dialect: 'sqlite', storage: 'path/to/database.sqlite' });

// Use BuildMyMeta with automatic logging (set to true) and pass \`userId\`
app.use(BuildMyMeta(sequelize, DB_TYPES.SQLITE, true, 'defaultUserId'));

// API route example
app.post('/login', (req, res) => {
    // Handle login
    res.send('User logged in');
});`
            },

            { type: 'paragraph', text: 'For a `POST` request to `/login`, here is an example of the metadata automatically saved in SQLite:' },
            {
                type: 'code',
                language: 'json',
                code: `{
    "userId": "defaultUserId",
    "apiMethod": "POST",
    "metadata": {
        "url": "/login",
        "body": { "username": "exampleUser" },
        "params": {},
        "query": {}
    },
    "status": "200",
    "responseMessage": "User logged in",
    "responseTime": 123,
    "ip": "127.0.0.1",
    "userAgent": "Mozilla/5.0",
    "headers": {
        "content-type": "application/json"
    },
    "timestamp": "2024-11-11T06:30:19.002Z"
}`
            },

            { type: 'title', text: 'Manual Metadata Logging' },
            { type: 'paragraph', text: 'Manual metadata logging requires using LogCustomMetadata to store entries, allowing control over when and what metadata is saved.' },
            {
                type: 'code',
                language: 'javascript',
                code: `const { Sequelize } = require('sequelize');
const { BuildMyMeta, LogCustomMetadata, DB_TYPES } = require('build-my-meta');

// Initialize SQLite
const sequelize = new Sequelize({ dialect: 'sqlite', storage: 'path/to/database.sqlite' });

// Use BuildMyMeta with manual logging (set to false)
app.use(BuildMyMeta(sequelize, DB_TYPES.SQLITE, false, 'defaultUserId'));

// Manually log metadata
app.post('/login', (req, res, next) => {
    let metadata = {
        userId: 'user123',  // Optional: Overrides defaultUserId for this request
        apiMethod: 'POST',
        metadata: { action: 'User login' },
        status: 201,
    };

    // Call LogCustomMetadata with the initial metadata
    LogCustomMetadata(metadata, req);

    // Example condition: add extra information if the user is not found
    if (!req.body.username) {
        metadata.metadata.error = "Username is missing";
        return next(new Error('Username is required'));
    }

    // Proceed with login processing...
    res.send('User logged in');
});`
            },

            { type: 'paragraph', text: 'In this example, metadata can be modified even after calling `LogCustomMetadata`. This allows dynamic updates to metadata based on conditions within the API logic.' },
            { type: 'paragraph', text: 'For a `POST` request to `/login`, here’s an example of the metadata saved in SQLite when additional fields are dynamically added:' },
            {
                type: 'code',
                language: 'json',
                code: `{
    "userId": "user123",
    "apiMethod": "POST",
    "metadata": {
        "action": "User login",
        "error": "Username is missing"
    },
    "status": "400",
    "responseMessage": "Username is required",
    "responseTime": 95,
    "ip": "127.0.0.1",
    "userAgent": "Mozilla/5.0",
    "headers": {
        "content-type": "application/json"
    },
    "timestamp": "2024-11-11T06:30:19.002Z"
}`
            },

            { type: 'title', text: 'Using `LogCustomMetadata` for Dynamic Metadata Updates' },
            { type: 'paragraph', text: 'With `LogCustomMetadata`, you can modify the metadata after the initial function call to add specific information. Here’s how to use it effectively:' },
            { type: 'paragraph', text: '1. Define initial metadata: Define essential fields, including `apiMethod`, `metadata`, `status`, and optionally `userId`.' },
            { type: 'paragraph', text: '2. Modify metadata based on conditions: After calling `LogCustomMetadata(metadata, req)`, you can dynamically add to the metadata object based on your API logic.' },
            { type: 'paragraph', text: '3. Finalize the response: The metadata will automatically capture the final response details, including status and error, at the end of the request.' },

            { type: "title", "text": "Metadata Logging to CSV Files" },
            { type: "paragraph", "text": "BuildMyMeta logs metadata to CSV files in your project folder under the directory `buildmymetalogs`. This directory contains four files:" },
            { type: "paragraph", "text": "`metaSuccess.csv` - Stores successfully logged metadata entries processed by BuildMyMeta." },
            { type: "paragraph", "text": "`metaError.csv` - Stores metadata entries with errors or issues encountered during logging in BuildMyMeta." },
            { type: "paragraph", "text": "`apiSuccess.csv` - Logs successful responses for user API calls." },
            { type: "paragraph", "text": "`apiError.csv` - Logs error responses for user API calls." }
        ]
    }
,

    {
        id: 'mysql',
        name: 'MySQL',
        content: [
            { type: 'title', text: 'Installation' },
            { type: 'paragraph', text: 'Install MySQL with Sequelize and BuildMyMeta for managing metadata logging in MySQL.' },
            {
                type: 'code',
                language: 'bash',
                code: 'npm install build-my-meta sequelize mysql2\n# Or, using Yarn\nyarn add build-my-meta sequelize mysql2\n# Or, using pnpm\npnpm add build-my-meta sequelize mysql2'
            },

            { type: 'title', text: 'Database Structure' },
            { type: 'paragraph', text: 'Metadata entries in MySQL will have the following structure:' },
            {
                type: 'code',
                language: 'json',
                code: `{
    "userId": "string",
    "apiMethod": "string",
    "metadata": {
        "action": "string",
        "...": "any additional fields"
    },
    "status": "string",
    "error": {
        "message": "string",
        "stack": "string"
    },
    "responseMessage": "string",
    "responseTime": "number",
    "ip": "string",
    "userAgent": "string",
    "headers": {
        "...": "headers as key-value pairs"
    },
    "timestamp": "date"
}`
            },

            { type: 'title', text: 'Automatic Metadata Logging' },
            { type: 'paragraph', text: 'This configuration allows automatic metadata logging in MySQL. The `userId` parameter is required in `BuildMyMeta` to identify users for metadata logs, but it can be modified per API request if needed.' },
            {
                type: 'code',
                language: 'javascript',
                code: `const { Sequelize } = require('sequelize');
const { BuildMyMeta, DB_TYPES } = require('build-my-meta');

// Initialize Sequelize with MySQL
const sequelize = new Sequelize(process.env.MYSQL_URL, { dialect: 'mysql' });

// Use BuildMyMeta with automatic logging (set to true) and pass \`userId\`
app.use(BuildMyMeta(sequelize, DB_TYPES.MYSQL, true, 'defaultUserId'));

// API route example
app.post('/login', (req, res) => {
    // Handle login
    res.send('User logged in');
});`
            },

            { type: 'paragraph', text: 'For a `POST` request to `/login`, here is an example of the metadata automatically saved in MySQL:' },
            {
                type: 'code',
                language: 'json',
                code: `{
    "userId": "defaultUserId",
    "apiMethod": "POST",
    "metadata": {
        "url": "/login",
        "body": { "username": "exampleUser" },
        "params": {},
        "query": {}
    },
    "status": "200",
    "responseMessage": "User logged in",
    "responseTime": 123,
    "ip": "127.0.0.1",
    "userAgent": "Mozilla/5.0",
    "headers": {
        "content-type": "application/json"
    },
    "timestamp": "2024-11-11T06:30:19.002Z"
}`
            },

            { type: 'title', text: 'Manual Metadata Logging' },
            { type: 'paragraph', text: 'For manual logging, use LogCustomMetadata to save metadata entries in MySQL, allowing control over when and what metadata is saved.' },
            {
                type: 'code',
                language: 'javascript',
                code: `const { Sequelize } = require('sequelize');
const { BuildMyMeta, LogCustomMetadata, DB_TYPES } = require('build-my-meta');

// Initialize Sequelize with MySQL
const sequelize = new Sequelize(process.env.MYSQL_URL, { dialect: 'mysql' });

// Use BuildMyMeta with manual logging (set to false)
app.use(BuildMyMeta(sequelize, DB_TYPES.MYSQL, false, 'defaultUserId'));

// Manually log metadata
app.post('/login', (req, res, next) => {
    let metadata = {
        userId: 'user123',  // Optional: Overrides defaultUserId for this request
        apiMethod: 'POST',
        metadata: { action: 'User login' },
        status: 201,
    };

    // Call LogCustomMetadata with the initial metadata
    LogCustomMetadata(metadata, req);

    // Example condition: add extra information if the user is not found
    if (!req.body.username) {
        metadata.metadata.error = "Username is missing";
        return next(new Error('Username is required'));
    }

    // Proceed with login processing...
    res.send('User logged in');
});`
            },

            { type: 'paragraph', text: 'In this example, metadata can be modified even after calling `LogCustomMetadata`. This allows dynamic updates to metadata based on conditions within the API logic.' },
            { type: 'paragraph', text: 'For a `POST` request to `/login`, here’s an example of the metadata saved in MySQL when additional fields are dynamically added:' },
            {
                type: 'code',
                language: 'json',
                code: `{
    "userId": "user123",
    "apiMethod": "POST",
    "metadata": {
        "action": "User login",
        "error": "Username is missing"
    },
    "status": "400",
    "responseMessage": "Username is required",
    "responseTime": 95,
    "ip": "127.0.0.1",
    "userAgent": "Mozilla/5.0",
    "headers": {
        "content-type": "application/json"
    },
    "timestamp": "2024-11-11T06:30:19.002Z"
}`
            },

            { type: 'title', text: 'Using `LogCustomMetadata` for Dynamic Metadata Updates' },
            { type: 'paragraph', text: 'With `LogCustomMetadata`, you can modify the metadata after the initial function call to add specific information. Here’s how to use it effectively:' },
            { type: 'paragraph', text: '1. Define initial metadata: Define essential fields, including `apiMethod`, `metadata`, `status`, and optionally `userId`.' },
            { type: 'paragraph', text: '2. Modify metadata based on conditions: After calling `LogCustomMetadata(metadata, req)`, you can dynamically add to the metadata object based on your API logic.' },
            { type: 'paragraph', text: '3. Finalize the response: The metadata will automatically capture the final response details, including status and error, at the end of the request.' },

            { type: "title", "text": "Metadata Logging to CSV Files" },
            { type: "paragraph", "text": "BuildMyMeta logs metadata to CSV files in your project folder under the directory `buildmymetalogs`. This directory contains four files:" },
            { type: "paragraph", "text": "`metaSuccess.csv` - Stores successfully logged metadata entries processed by BuildMyMeta." },
            { type: "paragraph", "text": "`metaError.csv` - Stores metadata entries with errors or issues encountered during logging in BuildMyMeta." },
            { type: "paragraph", "text": "`apiSuccess.csv` - Logs successful responses for user API calls." },
            { type: "paragraph", "text": "`apiError.csv` - Logs error responses for user API calls." }
        ]
    }
,
    {
        id: 'cassandra',
        name: 'Cassandra',
        content: [
            { type: 'title', text: 'Installation' },
            { type: 'paragraph', text: 'Install the Cassandra driver and BuildMyMeta to use metadata logging with Cassandra.' },
            {
                type: 'code',
                language: 'bash',
                code: 'npm install build-my-meta cassandra-driver\n# Or, using Yarn\nyarn add build-my-meta cassandra-driver\n# Or, using pnpm\npnpm add build-my-meta cassandra-driver'
            },

            { type: 'title', text: 'Database Structure' },
            { type: 'paragraph', text: 'Metadata entries in Cassandra will have the following structure:' },
            {
                type: 'code',
                language: 'json',
                code: `{
    "userId": "string",
    "apiMethod": "string",
    "metadata": {
        "action": "string",
        "...": "any additional fields"
    },
    "status": "string",
    "error": {
        "message": "string",
        "stack": "string"
    },
    "responseMessage": "string",
    "responseTime": "number",
    "ip": "string",
    "userAgent": "string",
    "headers": {
        "...": "headers as key-value pairs"
    },
    "timestamp": "date"
}`
            },

            { type: 'title', text: 'Automatic Metadata Logging' },
            { type: 'paragraph', text: 'Set up automatic metadata logging with Cassandra. The `userId` parameter is required in `BuildMyMeta` to identify users for metadata logs, but it can be overridden on a per-API basis.' },
            {
                type: 'code',
                language: 'javascript',
                code: `const { Client } = require('cassandra-driver');
const { BuildMyMeta, DB_TYPES } = require('build-my-meta');

// Initialize Cassandra client
const cassandraClient = new Client({
    contactPoints: ['127.0.0.1'],
    localDataCenter: 'datacenter1',
    keyspace: 'your_keyspace'
});

// Use BuildMyMeta with automatic logging (set to true) and pass \`userId\`
app.use(BuildMyMeta(cassandraClient, DB_TYPES.CASSANDRA, true, 'defaultUserId'));

// API route example
app.post('/login', (req, res) => {
    // Handle login
    res.send('User logged in');
});`
            },

            { type: 'paragraph', text: 'For a `POST` request to `/login`, here is an example of the metadata automatically saved in Cassandra:' },
            {
                type: 'code',
                language: 'json',
                code: `{
    "userId": "defaultUserId",
    "apiMethod": "POST",
    "metadata": {
        "url": "/login",
        "body": { "username": "exampleUser" },
        "params": {},
        "query": {}
    },
    "status": "200",
    "responseMessage": "User logged in",
    "responseTime": 123,
    "ip": "127.0.0.1",
    "userAgent": "Mozilla/5.0",
    "headers": {
        "content-type": "application/json"
    },
    "timestamp": "2024-11-11T06:30:19.002Z"
}`
            },

            { type: 'title', text: 'Manual Metadata Logging' },
            { type: 'paragraph', text: 'For manual logging, use LogCustomMetadata to add metadata entries to Cassandra, allowing more control over when and what metadata is stored.' },
            {
                type: 'code',
                language: 'javascript',
                code: `const { Client } = require('cassandra-driver');
const { BuildMyMeta, LogCustomMetadata, DB_TYPES } = require('build-my-meta');

// Initialize Cassandra client
const cassandraClient = new Client({
    contactPoints: ['127.0.0.1'],
    localDataCenter: 'datacenter1',
    keyspace: 'your_keyspace'
});

// Use BuildMyMeta with manual logging (set to false)
app.use(BuildMyMeta(cassandraClient, DB_TYPES.CASSANDRA, false, 'defaultUserId'));

// Manually log metadata
app.post('/login', (req, res, next) => {
    let metadata = {
        userId: 'user123',  // Optional: Overrides defaultUserId for this request
        apiMethod: 'POST',
        metadata: { action: 'User login' },
        status: 201,
    };

    // Call LogCustomMetadata with the initial metadata
    LogCustomMetadata(metadata, req);

    // Example condition: add extra information if the user is not found
    if (!req.body.username) {
        metadata.metadata.error = "Username is missing";
        return next(new Error('Username is required'));
    }

    // Proceed with login processing...
    res.send('User logged in');
});`
            },

            { type: 'paragraph', text: 'In this example, metadata can be modified even after calling `LogCustomMetadata`. This allows dynamic updates to metadata based on conditions within the API logic.' },
            { type: 'paragraph', text: 'For a `POST` request to `/login`, here’s an example of the metadata saved in Cassandra when additional fields are dynamically added:' },
            {
                type: 'code',
                language: 'json',
                code: `{
    "userId": "user123",
    "apiMethod": "POST",
    "metadata": {
        "action": "User login",
        "error": "Username is missing"
    },
    "status": "400",
    "responseMessage": "Username is required",
    "responseTime": 95,
    "ip": "127.0.0.1",
    "userAgent": "Mozilla/5.0",
    "headers": {
        "content-type": "application/json"
    },
    "timestamp": "2024-11-11T06:30:19.002Z"
}`
            },

            { type: 'title', text: 'Using `LogCustomMetadata` for Dynamic Metadata Updates' },
            { type: 'paragraph', text: 'With `LogCustomMetadata`, you can modify the metadata after the initial function call to add specific information. Here’s how to use it effectively:' },
            { type: 'paragraph', text: '1. Define initial metadata: Define essential fields, including `apiMethod`, `metadata`, `status`, and optionally `userId`.' },
            { type: 'paragraph', text: '2. Modify metadata based on conditions: After calling `LogCustomMetadata(metadata, req)`, you can dynamically add to the metadata object based on your API logic.' },
            { type: 'paragraph', text: '3. Finalize the response: The metadata will automatically capture the final response details, including status and error, at the end of the request.' },

            { type: "title", "text": "Metadata Logging to CSV Files" },
            { type: "paragraph", "text": "BuildMyMeta logs metadata to CSV files in your project folder under the directory `buildmymetalogs`. This directory contains four files:" },
            { type: "paragraph", "text": "`metaSuccess.csv` - Stores successfully logged metadata entries processed by BuildMyMeta." },
            { type: "paragraph", "text": "`metaError.csv` - Stores metadata entries with errors or issues encountered during logging in BuildMyMeta." },
            { type: "paragraph", "text": "`apiSuccess.csv` - Logs successful responses for user API calls." },
            { type: "paragraph", "text": "`apiError.csv` - Logs error responses for user API calls." }
        ]
    }
,
    {
        id: 'neo4j',
        name: 'Neo4j',
        content: [
            { type: 'title', text: 'Installation' },
            { type: 'paragraph', text: 'Install the Neo4j driver along with BuildMyMeta to enable metadata logging in Neo4j.' },
            {
                type: 'code',
                language: 'bash',
                code: 'npm install build-my-meta neo4j-driver\n# Or, using Yarn\nyarn add build-my-meta neo4j-driver\n# Or, using pnpm\npnpm add build-my-meta neo4j-driver'
            },

            { type: 'title', text: 'Database Structure' },
            { type: 'paragraph', text: 'Metadata entries in Neo4j will have the following structure:' },
            {
                type: 'code',
                language: 'json',
                code: `{
    "userId": "string",
    "apiMethod": "string",
    "metadata": {
        "action": "string",
        "...": "any additional fields"
    },
    "status": "string",
    "error": {
        "message": "string",
        "stack": "string"
    },
    "responseMessage": "string",
    "responseTime": "number",
    "ip": "string",
    "userAgent": "string",
    "headers": {
        "...": "headers as key-value pairs"
    },
    "timestamp": "date"
}`
            },

            { type: 'title', text: 'Automatic Metadata Logging' },
            { type: 'paragraph', text: 'Use the following setup to enable automatic metadata logging in Neo4j. The `userId` parameter is required in `BuildMyMeta` to identify users for metadata logs, but it can be modified on a per-API basis.' },
            {
                type: 'code',
                language: 'javascript',
                code: `const neo4j = require('neo4j-driver');
const { BuildMyMeta, DB_TYPES } = require('build-my-meta');

// Initialize Neo4j driver
const driver = neo4j.driver(
    'bolt://localhost:7687',
    neo4j.auth.basic('username', 'password')
);

// Use BuildMyMeta with automatic logging (set to true) and pass \`userId\`
app.use(BuildMyMeta(driver, DB_TYPES.NEO4J, true, 'defaultUserId'));

// API route example
app.post('/login', (req, res) => {
    // Handle login
    res.send('User logged in');
});`
            },

            { type: 'paragraph', text: 'For a `POST` request to `/login`, here is an example of the metadata automatically saved in Neo4j:' },
            {
                type: 'code',
                language: 'json',
                code: `{
    "userId": "defaultUserId",
    "apiMethod": "POST",
    "metadata": {
        "url": "/login",
        "body": { "username": "exampleUser" },
        "params": {},
        "query": {}
    },
    "status": "200",
    "responseMessage": "User logged in",
    "responseTime": 123,
    "ip": "127.0.0.1",
    "userAgent": "Mozilla/5.0",
    "headers": {
        "content-type": "application/json"
    },
    "timestamp": "2024-11-11T06:30:19.002Z"
}`
            },

            { type: 'title', text: 'Manual Metadata Logging' },
            { type: 'paragraph', text: 'For manual metadata logging in Neo4j, use LogCustomMetadata to save metadata entries explicitly.' },
            {
                type: 'code',
                language: 'javascript',
                code: `const neo4j = require('neo4j-driver');
const { BuildMyMeta, LogCustomMetadata, DB_TYPES } = require('build-my-meta');

// Initialize Neo4j driver
const driver = neo4j.driver(
    'bolt://localhost:7687',
    neo4j.auth.basic('username', 'password')
);

// Use BuildMyMeta with manual logging (set to false)
app.use(BuildMyMeta(driver, DB_TYPES.NEO4J, false, 'defaultUserId'));

// Manually log metadata
app.post('/login', (req, res, next) => {
    let metadata = {
        userId: 'user123',  // Optional: Overrides defaultUserId for this request
        apiMethod: 'POST',
        metadata: { action: 'User login' },
        status: 201,
    };

    // Call LogCustomMetadata with the initial metadata
    LogCustomMetadata(metadata, req);

    // Example condition: add extra information if the user is not found
    if (!req.body.username) {
        metadata.metadata.error = "Username is missing";
        return next(new Error('Username is required'));
    }

    // Proceed with login processing...
    res.send('User logged in');
});`
            },

            { type: 'paragraph', text: 'In this example, metadata can be modified even after calling `LogCustomMetadata`. This allows dynamic updates to metadata based on conditions within the API logic.' },
            { type: 'paragraph', text: 'For a `POST` request to `/login`, here’s an example of the metadata saved in Neo4j when additional fields are dynamically added:' },
            {
                type: 'code',
                language: 'json',
                code: `{
    "userId": "user123",
    "apiMethod": "POST",
    "metadata": {
        "action": "User login",
        "error": "Username is missing"
    },
    "status": "400",
    "responseMessage": "Username is required",
    "responseTime": 95,
    "ip": "127.0.0.1",
    "userAgent": "Mozilla/5.0",
    "headers": {
        "content-type": "application/json"
    },
    "timestamp": "2024-11-11T06:30:19.002Z"
}`
            },

            { type: 'title', text: 'Using `LogCustomMetadata` for Dynamic Metadata Updates' },
            { type: 'paragraph', text: 'With `LogCustomMetadata`, you can modify the metadata after the initial function call to add specific information. Here’s how to use it effectively:' },
            { type: 'paragraph', text: '1. Define initial metadata: Define essential fields, including `apiMethod`, `metadata`, `status`, and optionally `userId`.' },
            { type: 'paragraph', text: '2. Modify metadata based on conditions: After calling `LogCustomMetadata(metadata, req)`, you can dynamically add to the metadata object based on your API logic.' },
            { type: 'paragraph', text: '3. Finalize the response: The metadata will automatically capture the final response details, including status and error, at the end of the request.' },

            { type: "title", "text": "Metadata Logging to CSV Files" },
            { type: "paragraph", "text": "BuildMyMeta logs metadata to CSV files in your project folder under the directory `buildmymetalogs`. This directory contains four files:" },
            { type: "paragraph", "text": "`metaSuccess.csv` - Stores successfully logged metadata entries processed by BuildMyMeta." },
            { type: "paragraph", "text": "`metaError.csv` - Stores metadata entries with errors or issues encountered during logging in BuildMyMeta." },
            { type: "paragraph", "text": "`apiSuccess.csv` - Logs successful responses for user API calls." },
            { type: "paragraph", "text": "`apiError.csv` - Logs error responses for user API calls." }
        ]
    }
,
    {
        id: 'mariadb',
        name: 'MariaDB',
        content: [
            { type: 'title', text: 'Installation' },
            { type: 'paragraph', text: 'Install the Sequelize ORM with MariaDB driver and BuildMyMeta for metadata logging.' },
            {
                type: 'code',
                language: 'bash',
                code: 'npm install build-my-meta sequelize mariadb\n# Or, using Yarn\nyarn add build-my-meta sequelize mariadb\n# Or, using pnpm\npnpm add build-my-meta sequelize mariadb'
            },

            { type: 'title', text: 'Database Structure' },
            { type: 'paragraph', text: 'Metadata entries in MariaDB will have the following structure:' },
            {
                type: 'code',
                language: 'json',
                code: `{
    "userId": "string",
    "apiMethod": "string",
    "metadata": {
        "action": "string",
        "...": "any additional fields"
    },
    "status": "string",
    "error": {
        "message": "string",
        "stack": "string"
    },
    "responseMessage": "string",
    "responseTime": "number",
    "ip": "string",
    "userAgent": "string",
    "headers": {
        "...": "headers as key-value pairs"
    },
    "timestamp": "date"
}`
            },

            { type: 'title', text: 'Automatic Metadata Logging' },
            { type: 'paragraph', text: 'Set up automatic metadata logging with MariaDB as shown below. The `userId` parameter is required in `BuildMyMeta` to identify users for metadata logs, but it can be modified per API request if needed.' },
            {
                type: 'code',
                language: 'javascript',
                code: `const { Sequelize } = require('sequelize');
const { BuildMyMeta, DB_TYPES } = require('build-my-meta');

// Initialize Sequelize with MariaDB
const sequelize = new Sequelize(process.env.MARIADB_URL, { dialect: 'mariadb' });

// Use BuildMyMeta with automatic logging (set to true) and pass \`userId\`
app.use(BuildMyMeta(sequelize, DB_TYPES.MARIADB, true, 'defaultUserId'));

// API route example
app.post('/login', (req, res) => {
    // Handle login
    res.send('User logged in');
});`
            },

            { type: 'paragraph', text: 'For a `POST` request to `/login`, here is an example of the metadata automatically saved in MariaDB:' },
            {
                type: 'code',
                language: 'json',
                code: `{
    "userId": "defaultUserId",
    "apiMethod": "POST",
    "metadata": {
        "url": "/login",
        "body": { "username": "exampleUser" },
        "params": {},
        "query": {}
    },
    "status": "200",
    "responseMessage": "User logged in",
    "responseTime": 123,
    "ip": "127.0.0.1",
    "userAgent": "Mozilla/5.0",
    "headers": {
        "content-type": "application/json"
    },
    "timestamp": "2024-11-11T06:30:19.002Z"
}`
            },

            { type: 'title', text: 'Manual Metadata Logging' },
            { type: 'paragraph', text: 'Use the following example to enable manual metadata logging in MariaDB. This setup allows you to control when and what metadata is stored in the database.' },
            {
                type: 'code',
                language: 'javascript',
                code: `const { Sequelize } = require('sequelize');
const { BuildMyMeta, LogCustomMetadata, DB_TYPES } = require('build-my-meta');

// Initialize Sequelize with MariaDB
const sequelize = new Sequelize(process.env.MARIADB_URL, { dialect: 'mariadb' });

// Use BuildMyMeta with manual logging (set to false)
app.use(BuildMyMeta(sequelize, DB_TYPES.MARIADB, false, 'defaultUserId'));

// Manually log metadata
app.post('/login', (req, res, next) => {
    let metadata = {
        userId: 'user123',  // Optional: Overrides defaultUserId for this request
        apiMethod: 'POST',
        metadata: { action: 'User login' },
        status: 201,
    };

    // Call LogCustomMetadata with the initial metadata
    LogCustomMetadata(metadata, req);

    // Example condition: add extra information if the user is not found
    if (!req.body.username) {
        metadata.metadata.error = "Username is missing";
        return next(new Error('Username is required'));
    }

    // Proceed with login processing...
    res.send('User logged in');
});`
            },

            { type: 'paragraph', text: 'In this example, metadata can be modified even after calling `LogCustomMetadata`. This allows dynamic updates to metadata based on conditions within the API logic.' },
            { type: 'paragraph', text: 'For a `POST` request to `/login`, here’s an example of the metadata saved in MariaDB when additional fields are dynamically added:' },
            {
                type: 'code',
                language: 'json',
                code: `{
    "userId": "user123",
    "apiMethod": "POST",
    "metadata": {
        "action": "User login",
        "error": "Username is missing"
    },
    "status": "400",
    "responseMessage": "Username is required",
    "responseTime": 95,
    "ip": "127.0.0.1",
    "userAgent": "Mozilla/5.0",
    "headers": {
        "content-type": "application/json"
    },
    "timestamp": "2024-11-11T06:30:19.002Z"
}`
            },

            { type: 'title', text: 'Using `LogCustomMetadata` for Dynamic Metadata Updates' },
            { type: 'paragraph', text: 'With `LogCustomMetadata`, you can modify the metadata after the initial function call to add specific information. Here’s how to use it effectively:' },
            { type: 'paragraph', text: '1. Define initial metadata: Define essential fields, including `apiMethod`, `metadata`, `status`, and optionally `userId`.' },
            { type: 'paragraph', text: '2. Modify metadata based on conditions: After calling `LogCustomMetadata(metadata, req)`, you can dynamically add to the metadata object based on your API logic.' },
            { type: 'paragraph', text: '3. Finalize the response: The metadata will automatically capture the final response details, including status and error, at the end of the request.' },

            { type: "title", "text": "Metadata Logging to CSV Files" },
            { type: "paragraph", "text": "BuildMyMeta logs metadata to CSV files in your project folder under the directory `buildmymetalogs`. This directory contains four files:" },
            { type: "paragraph", "text": "`metaSuccess.csv` - Stores successfully logged metadata entries processed by BuildMyMeta." },
            { type: "paragraph", "text": "`metaError.csv` - Stores metadata entries with errors or issues encountered during logging in BuildMyMeta." },
            { type: "paragraph", "text": "`apiSuccess.csv` - Logs successful responses for user API calls." },
            { type: "paragraph", "text": "`apiError.csv` - Logs error responses for user API calls." }
        ]
    }
,
    {
        id: 'nextjs',
        name: 'Next.js',
        content: [
            { type: 'title', text: 'Installation' },
            { type: 'paragraph', text: 'Install Mongoose or other database packages based on your preference to enable metadata logging in Next.js.' },
            {
                type: 'code',
                language: 'bash',
                code: 'npm install build-my-meta mongoose\n# Or, using Yarn\nyarn add build-my-meta mongoose\n# Or, using pnpm\npnpm add build-my-meta mongoose'
            },

            { type: 'title', text: 'Database Structure' },
            { type: 'paragraph', text: 'Metadata entries in MongoDB or your chosen database will have the following structure:' },
            {
                type: 'code',
                language: 'json',
                code: `{
    "userId": "string",
    "apiMethod": "string",
    "metadata": {
        "action": "string",
        "...": "any additional fields"
    },
    "status": "string",
    "error": {
        "message": "string",
        "stack": "string"
    },
    "responseMessage": "string",
    "responseTime": "number",
    "ip": "string",
    "userAgent": "string",
    "headers": {
        "...": "headers as key-value pairs"
    },
    "timestamp": "date"
}`
            },

            { type: 'title', text: 'Automatic Metadata Logging' },
            { type: 'paragraph', text: 'Enable automatic logging of metadata for API routes in Next.js. The `userId` parameter is required in `BuildMyMeta` for identifying users in metadata logs, and it can be modified per API request if needed.' },
            {
                type: 'code',
                language: 'javascript',
                code: `// pages/api/data.js
import mongoose from 'mongoose';
import { BuildMyMeta, DB_TYPES } from 'build-my-meta';

const handler = async (req, res) => {
    if (req.method === 'GET') {
        res.status(200).json({ message: 'Data retrieved' });
    } else {
        res.status(405).json({ error: 'Method Not Allowed' });
    }
};

// Initialize mongoose connection
const db = await mongoose.connect(process.env.MONGO_URI, { useNewUrlParser: true, useUnifiedTopology: true });

// Wrap the handler with BuildMyMeta for automatic logging (true for automatic)
export default BuildMyMeta(db, DB_TYPES.MONGODB, true, 'defaultUserId')(handler);`
            },

            { type: 'paragraph', text: 'For a `GET` request to `/api/data`, here is an example of the metadata automatically saved in MongoDB:' },
            {
                type: 'code',
                language: 'json',
                code: `{
    "userId": "defaultUserId",
    "apiMethod": "GET",
    "metadata": {
        "url": "/api/data",
        "body": {},
        "params": {},
        "query": {}
    },
    "status": "200",
    "responseMessage": "Data retrieved",
    "responseTime": 110,
    "ip": "127.0.0.1",
    "userAgent": "Mozilla/5.0",
    "headers": {
        "content-type": "application/json"
    },
    "timestamp": "2024-11-11T06:30:19.002Z"
}`
            },

            { type: 'title', text: 'Manual Metadata Logging' },
            { type: 'paragraph', text: 'Use `LogCustomMetadata` for manual metadata logging in Next.js API routes, providing control over when and what metadata is saved in the database.' },
            {
                type: 'code',
                language: 'javascript',
                code: `// pages/api/manualData.js
import mongoose from 'mongoose';
import { BuildMyMeta, LogCustomMetadata, DB_TYPES } from 'build-my-meta';

const handler = async (req, res) => {
    if (req.method === 'POST') {
        // Define initial metadata and manually log it
        let metadata = {
            userId: 'user123',  // Optional: Overrides defaultUserId for this request
            apiMethod: 'POST',
            metadata: { action: 'User login' },
            status: 201,
        };
        await LogCustomMetadata(metadata, req);

        // Example condition: dynamically update metadata
        if (!req.body.username) {
            metadata.metadata.error = "Username is missing";
            return res.status(400).json({ error: 'Username is required' });
        }

        res.status(201).json({ message: 'Metadata logged manually' });
    } else {
        res.status(405).json({ error: 'Method Not Allowed' });
    }
};

// Initialize mongoose connection
const db = await mongoose.connect(process.env.MONGO_URI, { useNewUrlParser: true, useUnifiedTopology: true });

// Wrap the handler with BuildMyMeta for manual logging (false for manual)
export default BuildMyMeta(db, DB_TYPES.MONGODB, false, 'defaultUserId')(handler);`
            },

            { type: 'paragraph', text: 'For a `POST` request to `/api/manualData`, here’s an example of the metadata saved in MongoDB when additional fields are dynamically added:' },
            {
                type: 'code',
                language: 'json',
                code: `{
    "userId": "user123",
    "apiMethod": "POST",
    "metadata": {
        "action": "User login",
        "error": "Username is missing"
    },
    "status": "400",
    "responseMessage": "Username is required",
    "responseTime": 95,
    "ip": "127.0.0.1",
    "userAgent": "Mozilla/5.0",
    "headers": {
        "content-type": "application/json"
    },
    "timestamp": "2024-11-11T06:30:19.002Z"
}`
            },

            { type: 'title', text: 'Using `LogCustomMetadata` for Dynamic Metadata Updates' },
            { type: 'paragraph', text: 'With `LogCustomMetadata`, you can modify the metadata after the initial function call to add specific information. Here’s how to use it effectively:' },
            { type: 'paragraph', text: '1. Define initial metadata: Define essential fields, including `apiMethod`, `metadata`, `status`, and optionally `userId`.' },
            { type: 'paragraph', text: '2. Modify metadata based on conditions: After calling `LogCustomMetadata(metadata, req)`, you can dynamically add to the metadata object based on your API logic.' },
            { type: 'paragraph', text: '3. Finalize the response: The metadata will automatically capture the final response details, including status and error, at the end of the request.' },

            { type: "title", "text": "Metadata Logging to CSV Files" },
            { type: "paragraph", "text": "BuildMyMeta logs metadata to CSV files in your project folder under the directory `buildmymetalogs`. This directory contains four files:" },
            { type: "paragraph", "text": "`metaSuccess.csv` - Stores successfully logged metadata entries processed by BuildMyMeta." },
            { type: "paragraph", "text": "`metaError.csv` - Stores metadata entries with errors or issues encountered during logging in BuildMyMeta." },
            { type: "paragraph", "text": "`apiSuccess.csv` - Logs successful responses for user API calls." },
            { type: "paragraph", "text": "`apiError.csv` - Logs error responses for user API calls." }
        ]
    }
];

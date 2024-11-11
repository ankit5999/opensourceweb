// types.ts

import { Database } from "@/types";

export const databases: Database[] = [
    {
        id: 'mongodb',
        name: 'MongoDB',
        content: [
            { type: 'title', text: 'Installation' },
            { type: 'paragraph', text: 'Install the MongoDB package along with BuildMyMeta to integrate metadata logging with MongoDB.' },
            { type: 'code', language: 'bash', code: 'npm install build-my-meta mongoose' },

            { type: 'title', text: 'Automatic Metadata Logging' },
            { type: 'paragraph', text: 'Set up automatic metadata logging in MongoDB. Once configured, metadata will be automatically saved to MongoDB without manual intervention.' },
            {
                type: 'code',
                language: 'javascript',
                code: `const mongoose = require('mongoose');
const { BuildMyMeta, DB_TYPES } = require('build-my-meta');

// Initialize mongoose
mongoose.connect(process.env.MONGO_URI, { useNewUrlParser: true, useUnifiedTopology: true });

// Use BuildMyMeta with automatic logging (set to true)
app.use(BuildMyMeta(mongoose, DB_TYPES.MONGODB, true));`
            },

            { type: 'title', text: 'Manual Metadata Logging' },
            { type: 'paragraph', text: 'Configure manual logging in MongoDB. This option requires explicitly logging metadata entries using the LogCustomMetadata function.' },
            {
                type: 'code',
                language: 'javascript',
                code: `const mongoose = require('mongoose');
const { BuildMyMeta, LogCustomMetadata, DB_TYPES } = require('build-my-meta');

// Initialize mongoose
mongoose.connect(process.env.MONGO_URI, { useNewUrlParser: true, useUnifiedTopology: true });

// Use BuildMyMeta with manual logging (set to false)
app.use(BuildMyMeta(mongoose, DB_TYPES.MONGODB, false));

// Manually log metadata
const metadata = {
    userId: 'user123',
    apiMethod: 'POST',
    metadata: { action: 'User login' },
    status: 201,
};
LogCustomMetadata(metadata);`
            }
        ]
    },
    {
        id: 'postgresql',
        name: 'PostgreSQL',
        content: [
            { type: 'title', text: 'Installation' },
            { type: 'paragraph', text: 'Install Sequelize along with BuildMyMeta and PostgreSQL packages for integrating metadata logging with PostgreSQL.' },
            { type: 'code', language: 'bash', code: 'npm install build-my-meta sequelize pg' },

            { type: 'title', text: 'Automatic Metadata Logging' },
            { type: 'paragraph', text: 'This setup will automatically log metadata entries in PostgreSQL.' },
            {
                type: 'code',
                language: 'javascript',
                code: `const { Sequelize } = require('sequelize');
const { BuildMyMeta, DB_TYPES } = require('build-my-meta');

// Initialize Sequelize with PostgreSQL
const sequelize = new Sequelize(process.env.POSTGRES_URL, { dialect: 'postgres' });

// Use BuildMyMeta with automatic logging (set to true)
app.use(BuildMyMeta(sequelize, DB_TYPES.POSTGRES, true));`
            },

            { type: 'title', text: 'Manual Metadata Logging' },
            { type: 'paragraph', text: 'Enable manual logging with PostgreSQL, which requires calling LogCustomMetadata to log metadata.' },
            {
                type: 'code',
                language: 'javascript',
                code: `const { Sequelize } = require('sequelize');
const { BuildMyMeta, LogCustomMetadata, DB_TYPES } = require('build-my-meta');

// Initialize Sequelize with PostgreSQL
const sequelize = new Sequelize(process.env.POSTGRES_URL, { dialect: 'postgres' });

// Use BuildMyMeta with manual logging (set to false)
app.use(BuildMyMeta(sequelize, DB_TYPES.POSTGRES, false));

// Manually log metadata
const metadata = {
    userId: 'user123',
    apiMethod: 'POST',
    metadata: { action: 'User login' },
    status: 201,
};
LogCustomMetadata(metadata);`
            }
        ]
    },
    {
        id: 'firebase',
        name: 'Firebase',
        content: [
            { type: 'title', text: 'Installation' },
            { type: 'paragraph', text: 'Install Firebase Admin SDK to enable BuildMyMeta support for Firestore and Realtime Database in Firebase.' },
            { type: 'code', language: 'bash', code: 'npm install build-my-meta firebase-admin' },

            { type: 'title', text: 'Automatic Metadata Logging (Firestore)' },
            { type: 'paragraph', text: 'Automatic metadata logging for Firestore. Logs are automatically stored without manual logging.' },
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
app.use(BuildMyMeta(firebaseApp, DB_TYPES.FIRESTORE, true));`
            },

            { type: 'title', text: 'Automatic Metadata Logging (Realtime Database)' },
            { type: 'paragraph', text: 'Automatic metadata logging for Realtime Database. Metadata is stored automatically in Realtime Database.' },
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
app.use(BuildMyMeta(firebaseApp, DB_TYPES.FIREBASEREALTIME, true));`
            },

            { type: 'title', text: 'Manual Metadata Logging (Firestore)' },
            { type: 'paragraph', text: 'Enable manual logging for Firestore. Use LogCustomMetadata to store metadata entries manually.' },
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
app.use(BuildMyMeta(firebaseApp, DB_TYPES.FIRESTORE, false));

// Manually log metadata
const metadata = {
    userId: 'user123',
    apiMethod: 'POST',
    metadata: { action: 'User login' },
    status: 201,
};
LogCustomMetadata(metadata);`
            },

            { type: 'title', text: 'Manual Metadata Logging (Realtime Database)' },
            { type: 'paragraph', text: 'Enable manual logging for Realtime Database. Use LogCustomMetadata to add metadata entries manually.' },
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
app.use(BuildMyMeta(firebaseApp, DB_TYPES.FIREBASEREALTIME, false));

// Manually log metadata
const metadata = {
    userId: 'user123',
    apiMethod: 'POST',
    metadata: { action: 'User login' },
    status: 201,
};
LogCustomMetadata(metadata);`
            }
        ]
    },
    {
        id: 'sqlite',
        name: 'SQLite',
        content: [
            { type: 'title', text: 'Installation' },
            { type: 'paragraph', text: 'Install SQLite3 with Sequelize for SQLite database management.' },
            { type: 'code', language: 'bash', code: 'npm install build-my-meta sequelize sqlite3' },

            { type: 'title', text: 'Automatic Metadata Logging' },
            { type: 'paragraph', text: 'Automatic metadata logging saves logs without manual intervention.' },
            {
                type: 'code',
                language: 'javascript',
                code: `const { Sequelize } = require('sequelize');
const { BuildMyMeta, DB_TYPES } = require('build-my-meta');

// Initialize SQLite
const sequelize = new Sequelize({ dialect: 'sqlite', storage: 'path/to/database.sqlite' });

// Use BuildMyMeta with automatic logging (set to true)
app.use(BuildMyMeta(sequelize, DB_TYPES.SQLITE, true));`
            },

            { type: 'title', text: 'Manual Metadata Logging' },
            { type: 'paragraph', text: 'Manual metadata logging requires using LogCustomMetadata to store entries.' },
            {
                type: 'code',
                language: 'javascript',
                code: `const { Sequelize } = require('sequelize');
const { BuildMyMeta, LogCustomMetadata, DB_TYPES } = require('build-my-meta');

// Initialize SQLite
const sequelize = new Sequelize({ dialect: 'sqlite', storage: 'path/to/database.sqlite' });

// Use BuildMyMeta with manual logging (set to false)
app.use(BuildMyMeta(sequelize, DB_TYPES.SQLITE, false));

// Manually log metadata
const metadata = {
    userId: 'user123',
    apiMethod: 'POST',
    metadata: { action: 'User login' },
    status: 201,
};
LogCustomMetadata(metadata);`
            }
        ]
    },

    {
        id: 'mysql',
        name: 'MySQL',
        content: [
            { type: 'title', text: 'Installation' },
            { type: 'paragraph', text: 'Install MySQL with Sequelize and BuildMyMeta for managing metadata logging in MySQL.' },
            { type: 'code', language: 'bash', code: 'npm install build-my-meta sequelize mysql2' },
            { type: 'title', text: 'Automatic Metadata Logging' },
            { type: 'paragraph', text: 'This configuration allows automatic metadata logging in MySQL.' },
            {
                type: 'code',
                language: 'javascript',
                code: `const { Sequelize } = require('sequelize');
const { BuildMyMeta, DB_TYPES } = require('build-my-meta');

// Initialize Sequelize with MySQL
const sequelize = new Sequelize(process.env.MYSQL_URL, { dialect: 'mysql' });

// Use BuildMyMeta with automatic logging (set to true)
app.use(BuildMyMeta(sequelize, DB_TYPES.MYSQL, true));`
            },
            { type: 'title', text: 'Manual Metadata Logging' },
            { type: 'paragraph', text: 'For manual logging, use LogCustomMetadata to save metadata entries in MySQL.' },
            {
                type: 'code',
                language: 'javascript',
                code: `const { Sequelize } = require('sequelize');
const { BuildMyMeta, LogCustomMetadata, DB_TYPES } = require('build-my-meta');

// Initialize Sequelize with MySQL
const sequelize = new Sequelize(process.env.MYSQL_URL, { dialect: 'mysql' });

// Use BuildMyMeta with manual logging (set to false)
app.use(BuildMyMeta(sequelize, DB_TYPES.MYSQL, false));

// Manually log metadata
const metadata = {
    userId: 'user123',
    apiMethod: 'POST',
    metadata: { action: 'User login' },
    status: 201,
};
LogCustomMetadata(metadata);`
            }
        ]
    },
    {
        id: 'cassandra',
        name: 'Cassandra',
        content: [
            { type: 'title', text: 'Installation' },
            { type: 'paragraph', text: 'Install the Cassandra driver and BuildMyMeta to use metadata logging with Cassandra.' },
            { type: 'code', language: 'bash', code: 'npm install build-my-meta cassandra-driver' },
            { type: 'title', text: 'Automatic Metadata Logging' },
            { type: 'paragraph', text: 'Set up automatic metadata logging with Cassandra.' },
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

// Use BuildMyMeta with automatic logging (set to true)
app.use(BuildMyMeta(cassandraClient, DB_TYPES.CASSANDRA, true));`
            },
            { type: 'title', text: 'Manual Metadata Logging' },
            { type: 'paragraph', text: 'For manual logging, use LogCustomMetadata to add metadata entries to Cassandra.' },
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
app.use(BuildMyMeta(cassandraClient, DB_TYPES.CASSANDRA, false));

// Manually log metadata
const metadata = {
    userId: 'user123',
    apiMethod: 'POST',
    metadata: { action: 'User login' },
    status: 201,
};
LogCustomMetadata(metadata);`
            }
        ]
    },
    {
        id: 'neo4j',
        name: 'Neo4j',
        content: [
            { type: 'title', text: 'Installation' },
            { type: 'paragraph', text: 'Install the Neo4j driver along with BuildMyMeta to enable metadata logging in Neo4j.' },
            { type: 'code', language: 'bash', code: 'npm install build-my-meta neo4j-driver' },
            { type: 'title', text: 'Automatic Metadata Logging' },
            { type: 'paragraph', text: 'Use the following setup to enable automatic metadata logging in Neo4j.' },
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

// Use BuildMyMeta with automatic logging (set to true)
app.use(BuildMyMeta(driver, DB_TYPES.NEO4J, true));`
            },
            { type: 'title', text: 'Manual Metadata Logging' },
            { type: 'paragraph', text: 'For manual metadata logging in Neo4j, use LogCustomMetadata as shown below.' },
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
app.use(BuildMyMeta(driver, DB_TYPES.NEO4J, false));

// Manually log metadata
const metadata = {
    userId: 'user123',
    apiMethod: 'POST',
    metadata: { action: 'User login' },
    status: 201,
};
LogCustomMetadata(metadata);`
            }
        ]
    },
    {
        id: 'mariadb',
        name: 'MariaDB',
        content: [
            { type: 'title', text: 'Installation' },
            { type: 'paragraph', text: 'Install the Sequelize ORM with MariaDB driver and BuildMyMeta for metadata logging.' },
            { type: 'code', language: 'bash', code: 'npm install build-my-meta sequelize mariadb' },
            { type: 'title', text: 'Automatic Metadata Logging' },
            { type: 'paragraph', text: 'Set up automatic metadata logging with MariaDB as shown below.' },
            {
                type: 'code',
                language: 'javascript',
                code: `const { Sequelize } = require('sequelize');
const { BuildMyMeta, DB_TYPES } = require('build-my-meta');

// Initialize Sequelize with MariaDB
const sequelize = new Sequelize(process.env.MARIADB_URL, { dialect: 'mariadb' });

// Use BuildMyMeta with automatic logging (set to true)
app.use(BuildMyMeta(sequelize, DB_TYPES.MARIADB, true));`
            },
            { type: 'title', text: 'Manual Metadata Logging' },
            { type: 'paragraph', text: 'Use the following example to enable manual metadata logging in MariaDB.' },
            {
                type: 'code',
                language: 'javascript',
                code: `const { Sequelize } = require('sequelize');
const { BuildMyMeta, LogCustomMetadata, DB_TYPES } = require('build-my-meta');

// Initialize Sequelize with MariaDB
const sequelize = new Sequelize(process.env.MARIADB_URL, { dialect: 'mariadb' });

// Use BuildMyMeta with manual logging (set to false)
app.use(BuildMyMeta(sequelize, DB_TYPES.MARIADB, false));

// Manually log metadata
const metadata = {
    userId: 'user123',
    apiMethod: 'POST',
    metadata: { action: 'User login' },
    status: 201,
};
LogCustomMetadata(metadata);`
            }
        ]
    },
    {
        id: 'nextjs',
        name: 'Next.js',
        content: [
            { type: 'title', text: 'Installation' },
            { type: 'paragraph', text: 'Install Mongoose or other database packages based on your preference to enable metadata logging in Next.js.' },
            { type: 'code', language: 'bash', code: 'npm install build-my-meta mongoose' },
            { type: 'title', text: 'Automatic Metadata Logging' },
            { type: 'paragraph', text: 'Enable automatic logging of metadata for API routes in Next.js.' },
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
const db = mongoose.connect(process.env.MONGO_URI, { useNewUrlParser: true, useUnifiedTopology: true });

// Wrap the handler with BuildMyMeta for automatic logging (true for automatic)
export default BuildMyMeta(db, DB_TYPES.MONGODB, true)(handler);`
            },
            { type: 'title', text: 'Manual Metadata Logging' },
            { type: 'paragraph', text: 'Use LogCustomMetadata for manual metadata logging in Next.js API routes.' },
            {
                type: 'code',
                language: 'javascript',
                code: `// pages/api/manualData.js
import mongoose from 'mongoose';
import { BuildMyMeta, LogCustomMetadata, DB_TYPES } from 'build-my-meta';

const handler = async (req, res) => {
    if (req.method === 'POST') {
        // Manually log metadata
        await LogCustomMetadata({
            userId: 'user123',
            apiMethod: 'POST',
            metadata: { action: 'User login' },
            status: 201,
        });
        res.status(201).json({ message: 'Metadata logged manually' });
    } else {
        res.status(405).json({ error: 'Method Not Allowed' });
    }
};

// Initialize mongoose connection
const db = mongoose.connect(process.env.MONGO_URI, { useNewUrlParser: true, useUnifiedTopology: true });

// Wrap the handler with BuildMyMeta for manual logging (false for manual)
export default BuildMyMeta(db, DB_TYPES.MONGODB, false)(handler);`
            }
        ]
    }
];


















// export const databases = [
//   {
//     id: 'mongodb',
//     name: 'MongoDB',
//     installation: 'npm install mongoose',
//     configuration: `const mongoose = require('mongoose');
// const { BuildMyMeta, DB_TYPES } = require('build-my-meta');

// // Initialize mongoose
// mongoose.connect(process.env.MONGO_URI, { useNewUrlParser: true, useUnifiedTopology: true });

// app.use(BuildMyMeta(mongoose, DB_TYPES.MONGODB, true));`,
//     manualLogging: `const { LogCustomMetadata, DB_TYPES } = require('build-my-meta');

// const metadata = {
//     userId: 'user123',
//     apiMethod: 'POST',
//     metadata: { action: 'User login' },
//     status: 201,
// };

// LogCustomMetadata(mongoose, DB_TYPES.MONGODB, metadata);`
//   },
//   {
//     id: 'postgresql',
//     name: 'PostgreSQL',
//     installation: 'npm install sequelize pg',
//     configuration: `const { Sequelize } = require('sequelize');
// const { BuildMyMeta, DB_TYPES } = require('build-my-meta');

// const sequelize = new Sequelize(process.env.POSTGRES_URL, { dialect: 'postgres' });
// app.use(BuildMyMeta(sequelize, DB_TYPES.POSTGRES, true));`,
//     manualLogging: `const { LogCustomMetadata, DB_TYPES } = require('build-my-meta');

// const metadata = {
//     userId: 'user123',
//     apiMethod: 'POST',
//     metadata: { action: 'User login' },
//     status: 201,
// };

// LogCustomMetadata(sequelize, DB_TYPES.POSTGRES, metadata);`
//   },
//   {
//     id: 'mysql',
//     name: 'MySQL',
//     installation: 'npm install sequelize mysql2',
//     configuration: `const { Sequelize } = require('sequelize');
// const { BuildMyMeta, DB_TYPES } = require('build-my-meta');

// const sequelize = new Sequelize(process.env.MYSQL_URL, { dialect: 'mysql' });
// app.use(BuildMyMeta(sequelize, DB_TYPES.MYSQL, true));`,
//     manualLogging: `const { LogCustomMetadata, DB_TYPES } = require('build-my-meta');

// const metadata = {
//     userId: 'user123',
//     apiMethod: 'POST',
//     metadata: { action: 'User login' },
//     status: 201,
// };

// LogCustomMetadata(sequelize, DB_TYPES.MYSQL, metadata);`
//   },
//   {
//     id: 'firebase',
//     name: 'Firebase',
//     installation: 'npm install firebase-admin',
//     configuration: `const admin = require('firebase-admin');
// const { BuildMyMeta, DB_TYPES } = require('build-my-meta');

// const firebaseApp = admin.initializeApp({
//     credential: admin.credential.cert(require('/path/to/serviceAccountKey.json')),
//     databaseURL: 'https://your-project-id.firebaseio.com',
// });

// app.use(BuildMyMeta(firebaseApp, DB_TYPES.FIREBASE, true));`,
//     manualLogging: `const { LogCustomMetadata, DB_TYPES } = require('build-my-meta');

// const metadata = {
//     userId: 'user123',
//     apiMethod: 'POST',
//     metadata: { action: 'User login' },
//     status: 201,
// };

// LogCustomMetadata(firebaseApp, DB_TYPES.FIREBASE, metadata);`
//   },
//   {
//     id: 'sqlite',
//     name: 'SQLite',
//     installation: 'npm install sequelize sqlite3',
//     configuration: `const { Sequelize } = require('sequelize');
// const { BuildMyMeta, DB_TYPES } = require('build-my-meta');

// const sequelize = new Sequelize({ dialect: 'sqlite', storage: 'path/to/database.sqlite' });
// app.use(BuildMyMeta(sequelize, DB_TYPES.SQLITE, true));`,
//     manualLogging: `const { LogCustomMetadata, DB_TYPES } = require('build-my-meta');

// const metadata = {
//     userId: 'user123',
//     apiMethod: 'POST',
//     metadata: { action: 'User login' },
//     status: 201,
// };

// LogCustomMetadata(sequelize, DB_TYPES.SQLITE, metadata);`
//   },
//   {
//     id: 'cassandra',
//     name: 'Cassandra',
//     installation: 'npm install cassandra-driver',
//     configuration: `const { Client } = require('cassandra-driver');
// const { BuildMyMeta, DB_TYPES } = require('build-my-meta');

// const cassandraClient = new Client({
//     contactPoints: ['127.0.0.1'],
//     localDataCenter: 'datacenter1',
//     keyspace: 'your_keyspace'
// });
// app.use(BuildMyMeta(cassandraClient, DB_TYPES.CASSANDRA, true));`,
//     manualLogging: `const { LogCustomMetadata, DB_TYPES } = require('build-my-meta');

// const metadata = {
//     userId: 'user123',
//     apiMethod: 'POST',
//     metadata: { action: 'User login' },
//     status: 201,
// };

// LogCustomMetadata(cassandraClient, DB_TYPES.CASSANDRA, metadata);`
//   },
//   {
//     id: 'neo4j',
//     name: 'Neo4j',
//     installation: 'npm install neo4j-driver',
//     configuration: `const neo4j = require('neo4j-driver');
// const { BuildMyMeta, DB_TYPES } = require('build-my-meta');

// const driver = neo4j.driver('neo4j://localhost:7687', neo4j.auth.basic('username', 'password'));
// const session = driver.session();
// app.use(BuildMyMeta(session, DB_TYPES.NEO4J, true));`,
//     manualLogging: `const { LogCustomMetadata, DB_TYPES } = require('build-my-meta');

// const metadata = {
//     userId: 'user123',
//     apiMethod: 'POST',
//     metadata: { action: 'User login' },
//     status: 201,
// };

// LogCustomMetadata(session, DB_TYPES.NEO4J, metadata);`
//   },
//   {
//     id: 'mariadb',
//     name: 'MariaDB',
//     installation: 'npm install sequelize mariadb',
//     configuration: `const { Sequelize } = require('sequelize');
// const { BuildMyMeta, DB_TYPES } = require('build-my-meta');

// const sequelize = new Sequelize('database', 'username', 'password', {
//     host: 'localhost',
//     dialect: 'mariadb',
// });
// app.use(BuildMyMeta(sequelize, DB_TYPES.MARIADB, true));`,
//     manualLogging: `const { LogCustomMetadata, DB_TYPES } = require('build-my-meta');

// const metadata = {
//     userId: 'user123',
//     apiMethod: 'POST',
//     metadata: { action: 'User login' },
//     status: 201,
// };

// LogCustomMetadata(sequelize, DB_TYPES.MARIADB, metadata);`
//   },
//   {
//     id: 'nextjs',
//     name: 'Next.js',
//     installation: 'npm install mongoose',
//     configuration: `// pages/api/data.js
// import mongoose from 'mongoose';
// import { BuildMyMeta, DB_TYPES } from 'build-my-meta';

// const handler = async (req, res) => {
//     if (req.method === 'GET') {
//         res.status(200).json({ message: 'Data retrieved' });
//     } else {
//         res.status(405).json({ error: 'Method Not Allowed' });
//     }
// };

// // Initialize mongoose connection
// const db = mongoose.connect(process.env.MONGO_URI, { useNewUrlParser: true, useUnifiedTopology: true });

// // Wrap the handler with BuildMyMeta for automatic logging
// export default BuildMyMeta(db, DB_TYPES.MONGODB, true)(handler);`,
//     manualLogging: `// pages/api/manualData.js
// import mongoose from 'mongoose';
// import { BuildMyMeta, LogCustomMetadata, DB_TYPES } from 'build-my-meta';

// const handler = async (req, res) => {
//     if (req.method === 'POST') {
//         // Log metadata manually
//         await LogCustomMetadata({
//             userId: 'user123',
//             apiMethod: 'POST',
//             metadata: { action: 'User login' },
//             status: 201,
//         });
//         res.status(201).json({ message: 'Metadata logged manually' });
//     } else {
//         res.status(405).json({ error: 'Method Not Allowed' });
//     }
// };

// // Initialize mongoose connection
// const db = mongoose.connect(process.env.MONGO_URI, { useNewUrlParser: true, useUnifiedTopology: true });

// // Use BuildMyMeta without automatic logging
// export default BuildMyMeta(db, DB_TYPES.MONGODB, false)(handler);`
//   }
// ];




// export const databases = [
//     {
//         id: 'mongodb',
//         name: 'MongoDB',
//         installation: 'npm install build-my-meta mongoose',
//         configuration: `const mongoose = require('mongoose');
// const { BuildMyMeta, DB_TYPES } = require('build-my-meta');

// // Initialize mongoose
// mongoose.connect(process.env.MONGO_URI, { useNewUrlParser: true, useUnifiedTopology: true });

// // Use BuildMyMeta with automatic logging (set to true)
// app.use(BuildMyMeta(mongoose, DB_TYPES.MONGODB, true));`,
//         manualLogging: `const mongoose = require('mongoose');
// const { BuildMyMeta, LogCustomMetadata, DB_TYPES } = require('build-my-meta');

// // Initialize mongoose
// mongoose.connect(process.env.MONGO_URI, { useNewUrlParser: true, useUnifiedTopology: true });

// // Use BuildMyMeta with manual logging (set to false)
// app.use(BuildMyMeta(mongoose, DB_TYPES.MONGODB, false));

// // Manually log metadata
// const metadata = {
//     userId: 'user123',
//     apiMethod: 'POST',
//     metadata: { action: 'User login' },
//     status: 201,
// };
// LogCustomMetadata(metadata);`
//     },
//     {
//         id: 'postgresql',
//         name: 'PostgreSQL',
//         installation: 'npm install build-my-meta sequelize pg',
//         configuration: `const { Sequelize } = require('sequelize');
// const { BuildMyMeta, DB_TYPES } = require('build-my-meta');

// // Initialize Sequelize with PostgreSQL
// const sequelize = new Sequelize(process.env.POSTGRES_URL, { dialect: 'postgres' });

// // Use BuildMyMeta with automatic logging (set to true)
// app.use(BuildMyMeta(sequelize, DB_TYPES.POSTGRES, true));`,
//         manualLogging: `const { Sequelize } = require('sequelize');
// const { BuildMyMeta, LogCustomMetadata, DB_TYPES } = require('build-my-meta');

// // Initialize Sequelize with PostgreSQL
// const sequelize = new Sequelize(process.env.POSTGRES_URL, { dialect: 'postgres' });

// // Use BuildMyMeta with manual logging (set to false)
// app.use(BuildMyMeta(sequelize, DB_TYPES.POSTGRES, false));

// // Manually log metadata
// const metadata = {
//     userId: 'user123',
//     apiMethod: 'POST',
//     metadata: { action: 'User login' },
//     status: 201,
// };
// LogCustomMetadata(metadata);`
//     },
//     {
//         id: 'mysql',
//         name: 'MySQL',
//         installation: 'npm install build-my-meta sequelize mysql2',
//         configuration: `const { Sequelize } = require('sequelize');
// const { BuildMyMeta, DB_TYPES } = require('build-my-meta');

// // Initialize Sequelize with MySQL
// const sequelize = new Sequelize(process.env.MYSQL_URL, { dialect: 'mysql' });

// // Use BuildMyMeta with automatic logging (set to true)
// app.use(BuildMyMeta(sequelize, DB_TYPES.MYSQL, true));`,
//         manualLogging: `const { Sequelize } = require('sequelize');
// const { BuildMyMeta, LogCustomMetadata, DB_TYPES } = require('build-my-meta');

// // Initialize Sequelize with MySQL
// const sequelize = new Sequelize(process.env.MYSQL_URL, { dialect: 'mysql' });

// // Use BuildMyMeta with manual logging (set to false)
// app.use(BuildMyMeta(sequelize, DB_TYPES.MYSQL, false));

// // Manually log metadata
// const metadata = {
//     userId: 'user123',
//     apiMethod: 'POST',
//     metadata: { action: 'User login' },
//     status: 201,
// };
// LogCustomMetadata(metadata);`
//     },
//     {
//         id: 'firebase',
//         name: 'Firebase',
//         installation: 'npm install build-my-meta firebase-admin',
//         configuration: `const admin = require('firebase-admin');
// const { BuildMyMeta, DB_TYPES } = require('build-my-meta');

// // Initialize Firebase
// const firebaseApp = admin.initializeApp({
//     credential: admin.credential.cert(require('/path/to/serviceAccountKey.json')),
//     databaseURL: 'https://your-project-id.firebaseio.com',
// });

// // Use BuildMyMeta with automatic logging (set to true)
// app.use(BuildMyMeta(firebaseApp, DB_TYPES.FIREBASE, true));`,
//         manualLogging: `const admin = require('firebase-admin');
// const { BuildMyMeta, LogCustomMetadata, DB_TYPES } = require('build-my-meta');

// // Initialize Firebase
// const firebaseApp = admin.initializeApp({
//     credential: admin.credential.cert(require('/path/to/serviceAccountKey.json')),
//     databaseURL: 'https://your-project-id.firebaseio.com',
// });

// // Use BuildMyMeta with manual logging (set to false)
// app.use(BuildMyMeta(firebaseApp, DB_TYPES.FIREBASE, false));

// // Manually log metadata
// const metadata = {
//     userId: 'user123',
//     apiMethod: 'POST',
//     metadata: { action: 'User login' },
//     status: 201,
// };
// LogCustomMetadata(metadata);`
//     },
//     {
//         id: 'sqlite',
//         name: 'SQLite',
//         installation: 'npm install build-my-meta sequelize sqlite3',
//         configuration: `const { Sequelize } = require('sequelize');
// const { BuildMyMeta, DB_TYPES } = require('build-my-meta');

// // Initialize Sequelize with SQLite
// const sequelize = new Sequelize({ dialect: 'sqlite', storage: 'path/to/database.sqlite' });

// // Use BuildMyMeta with automatic logging (set to true)
// app.use(BuildMyMeta(sequelize, DB_TYPES.SQLITE, true));`,
//         manualLogging: `const { Sequelize } = require('sequelize');
// const { BuildMyMeta, LogCustomMetadata, DB_TYPES } = require('build-my-meta');

// // Initialize Sequelize with SQLite
// const sequelize = new Sequelize({ dialect: 'sqlite', storage: 'path/to/database.sqlite' });

// // Use BuildMyMeta with manual logging (set to false)
// app.use(BuildMyMeta(sequelize, DB_TYPES.SQLITE, false));

// // Manually log metadata
// const metadata = {
//     userId: 'user123',
//     apiMethod: 'POST',
//     metadata: { action: 'User login' },
//     status: 201,
// };
// LogCustomMetadata(metadata);`
//     },
//     {
//         id: 'cassandra',
//         name: 'Cassandra',
//         installation: 'npm install build-my-meta cassandra-driver',
//         configuration: `const { Client } = require('cassandra-driver');
// const { BuildMyMeta, DB_TYPES } = require('build-my-meta');

// // Initialize Cassandra client
// const cassandraClient = new Client({
//     contactPoints: ['127.0.0.1'],
//     localDataCenter: 'datacenter1',
//     keyspace: 'your_keyspace'
// });

// // Use BuildMyMeta with automatic logging (set to true)
// app.use(BuildMyMeta(cassandraClient, DB_TYPES.CASSANDRA, true));`,
//         manualLogging: `const { Client } = require('cassandra-driver');
// const { BuildMyMeta, LogCustomMetadata, DB_TYPES } = require('build-my-meta');

// // Initialize Cassandra client
// const cassandraClient = new Client({
//     contactPoints: ['127.0.0.1'],
//     localDataCenter: 'datacenter1',
//     keyspace: 'your_keyspace'
// });

// // Use BuildMyMeta with manual logging (set to false)
// app.use(BuildMyMeta(cassandraClient, DB_TYPES.CASSANDRA, false));

// // Manually log metadata
// const metadata = {
//     userId: 'user123',
//     apiMethod: 'POST',
//     metadata: { action: 'User login' },
//     status: 201,
// };
// LogCustomMetadata(metadata);`
//     },
//     {
//         id: 'nextjs',
//         name: 'Next.js',
//         installation: 'npm install build-my-meta mongoose',
//         configuration: `// pages/api/data.js
// import mongoose from 'mongoose';
// import { BuildMyMeta, DB_TYPES } from 'build-my-meta';

// const handler = async (req, res) => {
//     if (req.method === 'GET') {
//         res.status(200).json({ message: 'Data retrieved' });
//     } else {
//         res.status(405).json({ error: 'Method Not Allowed' });
//     }
// };

// // Initialize mongoose connection
// const db = mongoose.connect(process.env.MONGO_URI, { useNewUrlParser: true, useUnifiedTopology: true });

// // Wrap the handler with BuildMyMeta for automatic logging (true for automatic)
// export default BuildMyMeta(db, DB_TYPES.MONGODB, true)(handler);`,
//         manualLogging: `// pages/api/manualData.js
// import mongoose from 'mongoose';
// import { BuildMyMeta, LogCustomMetadata, DB_TYPES } from 'build-my-meta';

// const handler = async (req, res) => {
//     if (req.method === 'POST') {
//         // Manually log metadata
//         await LogCustomMetadata({
//             userId: 'user123',
//             apiMethod: 'POST',
//             metadata: { action: 'User login' },
//             status: 201,
//         });
//         res.status(201).json({ message: 'Metadata logged manually' });
//     } else {
//         res.status(405).json({ error: 'Method Not Allowed' });
//     }
// };

// // Initialize mongoose connection
// const db = mongoose.connect(process.env.MONGO_URI, { useNewUrlParser: true, useUnifiedTopology: true });

// // Wrap the handler with BuildMyMeta for manual logging (false for manual)
// export default BuildMyMeta(db, DB_TYPES.MONGODB, false)(handler);`
//     },
//     // Add other databases here if needed
// ];

export const databases = [
  {
    id: 'mongodb',
    name: 'MongoDB',
    installation: 'npm install mongoose',
    configuration: `const mongoose = require('mongoose');
const { BuildMyMeta, DB_TYPES } = require('build-my-meta');

// Initialize mongoose
mongoose.connect(process.env.MONGO_URI, { useNewUrlParser: true, useUnifiedTopology: true });

app.use(BuildMyMeta(mongoose, DB_TYPES.MONGODB, true));`,
    manualLogging: `const { LogCustomMetadata, DB_TYPES } = require('build-my-meta');

const metadata = {
    userId: 'user123',
    apiMethod: 'POST',
    metadata: { action: 'User login' },
    status: 201,
};

LogCustomMetadata(mongoose, DB_TYPES.MONGODB, metadata);`
  },
  {
    id: 'postgresql',
    name: 'PostgreSQL',
    installation: 'npm install sequelize pg',
    configuration: `const { Sequelize } = require('sequelize');
const { BuildMyMeta, DB_TYPES } = require('build-my-meta');

const sequelize = new Sequelize(process.env.POSTGRES_URL, { dialect: 'postgres' });
app.use(BuildMyMeta(sequelize, DB_TYPES.POSTGRES, true));`,
    manualLogging: `const { LogCustomMetadata, DB_TYPES } = require('build-my-meta');

const metadata = {
    userId: 'user123',
    apiMethod: 'POST',
    metadata: { action: 'User login' },
    status: 201,
};

LogCustomMetadata(sequelize, DB_TYPES.POSTGRES, metadata);`
  },
  {
    id: 'mysql',
    name: 'MySQL',
    installation: 'npm install sequelize mysql2',
    configuration: `const { Sequelize } = require('sequelize');
const { BuildMyMeta, DB_TYPES } = require('build-my-meta');

const sequelize = new Sequelize(process.env.MYSQL_URL, { dialect: 'mysql' });
app.use(BuildMyMeta(sequelize, DB_TYPES.MYSQL, true));`,
    manualLogging: `const { LogCustomMetadata, DB_TYPES } = require('build-my-meta');

const metadata = {
    userId: 'user123',
    apiMethod: 'POST',
    metadata: { action: 'User login' },
    status: 201,
};

LogCustomMetadata(sequelize, DB_TYPES.MYSQL, metadata);`
  },
  {
    id: 'firebase',
    name: 'Firebase',
    installation: 'npm install firebase-admin',
    configuration: `const admin = require('firebase-admin');
const { BuildMyMeta, DB_TYPES } = require('build-my-meta');

const firebaseApp = admin.initializeApp({
    credential: admin.credential.cert(require('/path/to/serviceAccountKey.json')),
    databaseURL: 'https://your-project-id.firebaseio.com',
});

app.use(BuildMyMeta(firebaseApp, DB_TYPES.FIREBASE, true));`,
    manualLogging: `const { LogCustomMetadata, DB_TYPES } = require('build-my-meta');

const metadata = {
    userId: 'user123',
    apiMethod: 'POST',
    metadata: { action: 'User login' },
    status: 201,
};

LogCustomMetadata(firebaseApp, DB_TYPES.FIREBASE, metadata);`
  },
  {
    id: 'sqlite',
    name: 'SQLite',
    installation: 'npm install sequelize sqlite3',
    configuration: `const { Sequelize } = require('sequelize');
const { BuildMyMeta, DB_TYPES } = require('build-my-meta');

const sequelize = new Sequelize({ dialect: 'sqlite', storage: 'path/to/database.sqlite' });
app.use(BuildMyMeta(sequelize, DB_TYPES.SQLITE, true));`,
    manualLogging: `const { LogCustomMetadata, DB_TYPES } = require('build-my-meta');

const metadata = {
    userId: 'user123',
    apiMethod: 'POST',
    metadata: { action: 'User login' },
    status: 201,
};

LogCustomMetadata(sequelize, DB_TYPES.SQLITE, metadata);`
  },
  {
    id: 'cassandra',
    name: 'Cassandra',
    installation: 'npm install cassandra-driver',
    configuration: `const { Client } = require('cassandra-driver');
const { BuildMyMeta, DB_TYPES } = require('build-my-meta');

const cassandraClient = new Client({
    contactPoints: ['127.0.0.1'],
    localDataCenter: 'datacenter1',
    keyspace: 'your_keyspace'
});
app.use(BuildMyMeta(cassandraClient, DB_TYPES.CASSANDRA, true));`,
    manualLogging: `const { LogCustomMetadata, DB_TYPES } = require('build-my-meta');

const metadata = {
    userId: 'user123',
    apiMethod: 'POST',
    metadata: { action: 'User login' },
    status: 201,
};

LogCustomMetadata(cassandraClient, DB_TYPES.CASSANDRA, metadata);`
  },
  {
    id: 'neo4j',
    name: 'Neo4j',
    installation: 'npm install neo4j-driver',
    configuration: `const neo4j = require('neo4j-driver');
const { BuildMyMeta, DB_TYPES } = require('build-my-meta');

const driver = neo4j.driver('neo4j://localhost:7687', neo4j.auth.basic('username', 'password'));
const session = driver.session();
app.use(BuildMyMeta(session, DB_TYPES.NEO4J, true));`,
    manualLogging: `const { LogCustomMetadata, DB_TYPES } = require('build-my-meta');

const metadata = {
    userId: 'user123',
    apiMethod: 'POST',
    metadata: { action: 'User login' },
    status: 201,
};

LogCustomMetadata(session, DB_TYPES.NEO4J, metadata);`
  },
  {
    id: 'mariadb',
    name: 'MariaDB',
    installation: 'npm install sequelize mariadb',
    configuration: `const { Sequelize } = require('sequelize');
const { BuildMyMeta, DB_TYPES } = require('build-my-meta');

const sequelize = new Sequelize('database', 'username', 'password', {
    host: 'localhost',
    dialect: 'mariadb',
});
app.use(BuildMyMeta(sequelize, DB_TYPES.MARIADB, true));`,
    manualLogging: `const { LogCustomMetadata, DB_TYPES } = require('build-my-meta');

const metadata = {
    userId: 'user123',
    apiMethod: 'POST',
    metadata: { action: 'User login' },
    status: 201,
};

LogCustomMetadata(sequelize, DB_TYPES.MARIADB, metadata);`
  },
  {
    id: 'nextjs',
    name: 'Next.js',
    installation: 'npm install mongoose',
    configuration: `// pages/api/data.js
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

// Wrap the handler with BuildMyMeta for automatic logging
export default BuildMyMeta(db, DB_TYPES.MONGODB, true)(handler);`,
    manualLogging: `// pages/api/manualData.js
import mongoose from 'mongoose';
import { BuildMyMeta, LogCustomMetadata, DB_TYPES } from 'build-my-meta';

const handler = async (req, res) => {
    if (req.method === 'POST') {
        // Log metadata manually
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

// Use BuildMyMeta without automatic logging
export default BuildMyMeta(db, DB_TYPES.MONGODB, false)(handler);`
  }
];




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

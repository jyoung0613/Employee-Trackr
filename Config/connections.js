const mysql = require('mysql');

// Enable access to .env variables
require('dotenv').config();

// Use environment variables to connect to database
const connections = mysql.createConnection({
    host: 'localhost',
    port: 3006,
    user: process.env.DB_USER,
    password: process.env.DB_PASSWORD,
    database: process.env.DB_NAME,
});

connections.connect((err) => {
    if (err) throw err;
});

module.exports = connection;
const mysql = require('mysql2');

//Connects to SQL Database
const db = mysql.createConnection (
    {
        host: 'localhost',
        user: 'root',
        password: 'Aegis123!!',
        database: 'employees_db'
    }
);

module.exports = db;
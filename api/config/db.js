const mysql = require('mysql2/promise');

var pool = mysql.createPool({
    host: 'localhost',
    user: 'root',
    password: '123456',
    database: 'netflix'
});

module.exports = pool;
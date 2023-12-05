const mysql = require('mysql2');

const connection = mysql.createPool({
  host: '192.168.1.5',
  user: 'api',
  password: 'api123',
  database: 'mercadinho',
  waitForConnections: true,
  connectionLimit: 10,
  queueLimit: 0
});

module.exports = connection;

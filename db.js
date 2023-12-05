const mysql = require('mysql2');

const connection = mysql.createConnection({
  host: '192.168.1.5',
  user: 'api',
  password: 'api123',
  database: 'mercadinho'
});

connection.connect((err) => {
  if (err) {
    console.error('Erro ao conectar ao banco de dados:', err);
  } else {
    console.log('Conexão ao banco de dados estabelecida.');
  }
});

module.exports = connection;

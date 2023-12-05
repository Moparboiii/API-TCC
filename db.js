
const mysql = require('mysql2');

const connection = mysql.createConnection({
  host: '192.168.1.5',       // Substitua pelo host do seu banco de dados
  user: 'api',     // Substitua pelo usuário do seu banco de dados
  password: 'api123',   // Substitua pela senha do seu banco de dados
  database: 'mercadinho',   // Substitua pelo nome do seu banco de dados
});
connection.connect((err) => {
  if (err) {
    console.error('Erro ao conectar ao banco de dados:', err);
  } else {
    console.log('Conexão ao banco de dados estabelecida.');
  }
});

module.exports = connection;

const mysql = require('mysql2');

const connection = mysql.createConnection({
  host: 'aws.connect.psdb.cloud',
  username: '9bs0qfo0nygsajb4b7g6',
  password: 'pscale_pw_Y1vEk9Oqxr24IbiHovBv8WJYNsu7zzChjPCqq5z8KXc',
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
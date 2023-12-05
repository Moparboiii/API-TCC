
const mysql = require('mysql2');

const connection = mysql.createConnection('mysql://vn2hyf05lqxtj4ci0xip:pscale_pw_PvazEfNAweltxz56wctuFueicYsLu5xG3pvq3qb4Xeg@aws.connect.psdb.cloud/mercadinho?ssl={"rejectUnauthorized":true}')

connection.connect((err) => {
  if (err) {
    console.error('Erro ao conectar ao banco de dados:', err);
  } else {
    console.log('Conexão ao banco de dados estabelecida.');
  }
});

module.exports = connection;
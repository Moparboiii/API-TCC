
const mysql = require('mysql2');

const connection = mysql.createConnection('mysql://vxjx64ri36j77uy1luts:pscale_pw_iPJApZeyuAGHKnzHct1mk25UsAk7I4rDL5GxcITJI9d@aws.connect.psdb.cloud/mercadinho?ssl={"rejectUnauthorized":true}')

connection.connect((err) => {
  if (err) {
    console.error('Erro ao conectar ao banco de dados:', err);
  } else {
    console.log('Conexão ao banco de dados estabelecida.');
  }
});

module.exports = connection;

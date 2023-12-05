
const mysql = require('mysql2');

const connection = mysql.createConnection('mysql://wf159g7a5b8i4fd5xe4q:pscale_pw_CV3F5Bt9ShIiJwhBQ8B29xDedXwkckKLdrRMrlLrPAC@aws.connect.psdb.cloud/mercadinho?ssl={"rejectUnauthorized":true}')

connection.connect((err) => {
  if (err) {
    console.error('Erro ao conectar ao banco de dados:', err);
  } else {
    console.log('Conexão ao banco de dados estabelecida.');
  }
});

module.exports = connection;
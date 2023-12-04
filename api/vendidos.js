// api/vendidos.js

const connection = require('../db.jsx');

module.exports = async (req, res) => {
    connection.query('SELECT * FROM vendas', (err, results) => {
        if (err) {
            console.error('Erro na consulta:', err);
            res.status(500).json({ error: 'Erro ao buscar as vendas.' });
        } else {
            if (results.length > 0) {
                res.json(results);
            } else {
                res.status(404).json({ error: 'Nenhuma Venda Encontrada.' });
            }
        }
    });
};

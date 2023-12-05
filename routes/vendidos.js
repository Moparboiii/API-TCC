// api/registrarVenda.js

const connection = require('../db.js');

const express = require("express");
const router = express.Router();

// Rota para consultar todos as vendas
router.get('/vendidos', (req, res) => {
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
});

module.exports = router;
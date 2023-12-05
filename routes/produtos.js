const connection = require('../db.js');

const express = require("express");
const router = express.Router();

router.get('/', (req, res) => {
    connection.query('SELECT * FROM produtos', (err, results) => {
        if (err) {
            console.error('Erro na consulta:', err);
            res.status(500).json({ error: 'Erro ao buscar os produtos.' });
        } else {
            if (results.length > 0) {
                res.json(results);
            } else {
                res.status(404).json({ error: 'Produtos não encontrados.' });
            }
        }
    });
});

module.exports = router;
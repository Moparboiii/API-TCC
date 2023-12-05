// api/produto.js

const connection = require('../db.js');

const express = require("express");
const router = express.Router();

router.get('/', (req, res) => {
    const productId = req.params.id;
    connection.query(`SELECT * FROM produtos WHERE id_produto = ?`, [productId], (err, result) => {
        if (err) {
            res.status(500).json({ error: 'Erro ao buscar o produto.' });
        } else {
            if (result.length > 0) {
                res.json(result[0]);
            } else {
                res.status(404).json({ error: 'Produto não encontrado.' });
            }
        }
    });
});

module.exports = router;
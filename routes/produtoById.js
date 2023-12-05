// api/produto.js

const connection = require('../db.js');

const express = require("express");
const router = express.Router();

router.get('/', (req, res) => {
    const productId = req.params.id;
    console.log('Sou o ID:', productId);
    connection.query(`SELECT * FROM produtos WHERE id_produto = ?`, [productId], (err, result) => {
        if (err) {
            console.error('Erro ao buscar o produto:', err);
            res.status(500).json({ error: 'Erro ao buscar o produto.' });
        } else {
            if (result.length > 0) {
                res.json(result[0]);
            } else {
                console.log('Produto não encontrado para o ID:', productId);
                console.log('Produto não encontrado para o ID:', productId);
                res.status(404).json({ error: 'Produto não encontrado.', productId });
            }
        }
    });
});

module.exports = router;

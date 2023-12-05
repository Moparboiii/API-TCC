// api/produto.js

const connection = require('../db.js');

const express = require("express");
const router = express.Router();

router.delete('/deleteProduto/:id', (req, res) => {
    const productId = req.params.id;
    connection.query(`DELETE FROM produtos WHERE id_produto = ?`, [productId], (err, result) => {
        if (err) {
            res.status(500).json({ error: 'Erro ao deletar o produto.' });
        } else {
            res.status(204).json({ mensagem: 'Produto deletado com sucesso.' });
        }
    });
});


module.exports = router;
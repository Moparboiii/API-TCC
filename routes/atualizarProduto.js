// api/cadProduto.js

const connection = require('../db.js');

const express = require("express");
const router = express.Router();


router.put('/atualizarProduto/:id', (req, res) => {
    const productId = req.params.id;
    const { nome, preco, quantidade } = req.body;

    connection.query(`UPDATE produtos SET nome = ?, preco = ?, quantidade = ? WHERE id_produto = ?`, [nome, preco, quantidade, productId], (err, result) => {
        if (err) {
            res.status(500).json({ error: 'Erro ao atualizar o produto.' });
        } else {
            if (result.affectedRows > 0) {
                res.status(200).json({ mensagem: 'Produto atualizado com sucesso.' });
            } else {
                res.status(404).json({ error: 'Produto não encontrado.' });
            }
        }
    }
    );
});

module.exports = router;
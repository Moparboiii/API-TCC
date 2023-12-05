// api/cadProduto.js

const connection = require('../db.js');

const express = require("express");
const router = express.Router();


router.post('/cadProduto', (req, res) => {
    connection.query(`INSERT INTO produtos (nome, preco, quantidade) VALUES (?, ?, ?)`, [req.body.nome, req.body.preco, req.body.quantidade], (error, results) => {
        if (error) {
            return res.status(500).send({ error: error })
        }
        response = {
            mensagem: 'Produto cadastrado com sucesso',
            produtoCriado: {
                id_produto: results.insertId,
                nome: req.body.nome,
                preco: req.body.preco,
                quantidade: req.body.quantidade
            }
        }
        return res.status(201).send(response)
    })
})

module.exports = router;
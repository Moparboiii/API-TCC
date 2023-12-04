// api/cadProduto.js

const connection = require('../db.jsx');

module.exports = async (req, res) => {
    connection.query('INSERT INTO produtos (nome, preco, quantidade) VALUES (?, ?, ?)', [req.body.nome, req.body.preco, req.body.quantidade], (error, results) => {
        if (error) {
            return res.status(500).json({ error: error });
        }
        const response = {
            mensagem: 'Produto cadastrado com sucesso',
            produtoCriado: {
                id_produto: results.insertId,
                nome: req.body.nome,
                preco: req.body.preco,
                quantidade: req.body.quantidade
            }
        };
        return res.status(201).json(response);
    });
};
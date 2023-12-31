// api/registrarVenda.js

const connection = require('../db.js');

const express = require("express");
const router = express.Router();

// Rota para consultar todos as vendas
router.get('/', (req, res) => {
    const productId = req.params.id;
    console.log(productId);
    const query = `
    SELECT itens_vendidos.id_produto, produtos.nome, produtos.preco, itens_vendidos.quantidade
    FROM itens_vendidos
    JOIN produtos ON itens_vendidos.id_produto = produtos.id_produto
    WHERE itens_vendidos.id_venda = ?;
  `;

    connection.query(query, [productId], (err, result) => {
        if (err) {
            res.status(500).json({ error: 'Erro ao buscar o pedido.' });
        } else {
            if (result.length > 0) {
                res.json(result);
            } else {
                res.status(404).json({ error: 'Pedido não encontrado.' });
            }
        }
    });
});

module.exports = router;
// api/registrarVenda.js

const connection = require('../db.js');

const express = require("express");
const router = express.Router();

router.post('/', (req, res) => {
    const { itens, data_hora, valor_total } = req.body;

    // Primeiro, insira os dados da venda na tabela de vendas
    connection.query('INSERT INTO vendas (data_hora, valor_total) VALUES (?, ?)', [data_hora, valor_total], (err, result) => {
        if (err) {
            console.error('Erro ao registrar a venda:', err);
            res.status(500).json({ error: 'Erro ao registrar a venda.' });
        } else {
            const idVenda = result.insertId;

            // Em seguida, insira os itens vendidos na tabela de itens_vendidos
            const values = itens.map((item) => [idVenda, item.id_produto, item.quantidade]);
            connection.query('INSERT INTO itens_vendidos (id_venda, id_produto, quantidade) VALUES ?', [values], (err, result) => {
                if (err) {
                    console.error('Erro ao registrar os itens vendidos:', err);
                    res.status(500).json({ error: 'Erro ao registrar os itens vendidos.' });
                } else {
                    res.status(201).json('Venda registrada com sucesso.');
                }
            }
            );
        }
    }
    );
});

module.exports = router;
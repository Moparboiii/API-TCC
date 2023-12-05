const express = require('express');
const cors = require('cors');
const cadProduto = require("./cadProduto")
const produtoById = require("./produtoById")
const produtos = require("./produtos")
const vendidos = require("./vendidos")
const vendidosById = require("./vendidosById")
const registrarVenda = require("./registrarVenda")
const produtoDeleteiD = require("./produtoDeleteId")
const atualizarProduto = require("./atualizarProduto")

const router = express.Router();

// Middlewares
const app = express();
app.use(express.json());
app.use(cors());

// Routes
app.use("/produtos", produtos);
app.use("/cadprodutos", cadProduto);
app.use("/deleteProduto/:id", produtoDeleteiD);
app.use("/produtoById/:id", produtoById);
app.use("/vendidos", vendidos);
app.use("/vendidosById/:id", vendidosById);
app.use("/registrar-venda", registrarVenda);
app.use("/atualizarProduto", atualizarProduto);

// connection
const port = process.env.PORT || 5000;

app.listen(port, () => console.log(`Listening to port ${port}`));
const express = require('express');
const cors = require('cors');
const cadProduto = require("./routes/cadProduto")
const produtoById = require("./routes/produtoById")
const produtos = require("./routes/produtos")
const vendidos = require("./routes/vendidos")
const vendidosById = require("./routes/vendidosById")
const registrarVenda = require("./routes/registrarVenda")
const produtoDeleteiD = require("./routes/produtoDeleteId")
const atualizarProduto = require("./routes/atualizarProduto")

const router = express.Router();

// Middlewares
const app = express();
app.use(express.json());
app.use(cors());

// Routes
app.use("/produtos", produtos);
app.use("/cadprodutos", cadProduto);
app.use("/deleteProduto", produtoDeleteiD);
app.use("/produtoById", produtoById);
app.use("/vendidos", vendidos);
app.use("/vendidosById", vendidosById);
app.use("/registrar-venda", registrarVenda);
app.use("/atualizarProduto", atualizarProduto);

// connection
const port = process.env.PORT || 5000;

app.listen(port, () => console.log(`Listening to port ${port}`));
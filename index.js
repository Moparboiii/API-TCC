const express = require('express');
const cadProduto = require("./routes/cadProduto")
const produtoById = require("./routes/produtoById")
const produtos = require("./routes/produtos")
const vendidos = require("./routes/vendidos")
const vendidosById = require("./routes/vendidosById")
const registrarVenda = require("./routes/registrarVenda")
const produtoDeleteiD = require("./routes/produtoDeleteId")

const router = express.Router();

// Middlewares
const app = express();
app.use(express.json());

// Routes
app.use("/home", home);

// connection
const port = process.env.PORT || 5000;
const database = process.env.DATABASE_URL || 'mysql://vxjx64ri36j77uy1luts:pscale_pw_iPJApZeyuAGHKnzHct1mk25UsAk7I4rDL5GxcITJI9d@aws.connect.psdb.cloud/mercadinho?ssl={"rejectUnauthorized":true}'
app.listen(port, () => console.log(`Listening to port ${port}`));
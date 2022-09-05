const express = require('express');
const produtoController = require('../controllers/produtoController');
const routes = express.Router();

routes.get("/produtos", produtoController.listarProduto);
routes.post("/produtos", produtoController.cadastrarProduto);
routes.delete("/produtos/:id", produtoController.deletarProduto);
routes.put("/produtos/:id", produtoController.atualizarProduto);


module.exports = routes;
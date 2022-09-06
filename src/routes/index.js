const express = require('express');
const produtoController = require('../controllers/produtoController');
const requestLog = require('../middlewares/requestLog');// rotas gerais
const bloqueio = require('../middlewares/bloqueio');// rotas gerais

const routes = express.Router();

routes.get("/produtos", requestLog,bloqueio,produtoController.listarProduto);
routes.post("/produtos", produtoController.cadastrarProduto);
routes.delete("/produtos/:id", produtoController.deletarProduto);
routes.put("/produtos/:id", produtoController.atualizarProduto);


module.exports = routes;
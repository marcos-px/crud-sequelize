const express = require('express');
const produtoController = require('../controllers/produtoController');
const usuariosController = require('../controllers/usuariosController');
const requestLog = require('../middlewares/requestLog');// rotas gerais
const bloqueio = require('../middlewares/bloqueio');// rotas gerais
const Usuarios = require('../models/Usuarios');
const usuarioCreateValidation = require('../Validations/usuarios/create');

const routes = express.Router();

routes.get("/produtos", requestLog,bloqueio,produtoController.listarProduto);
routes.post("/produtos", produtoController.cadastrarProduto);
routes.delete("/produtos/:id", produtoController.deletarProduto);
routes.put("/produtos/:id", produtoController.atualizarProduto);

routes.post("/usuarios", usuarioCreateValidation, usuariosController.registro)

module.exports = routes;
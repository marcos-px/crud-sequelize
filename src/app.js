const express = require('express');
const routes = require ("./routes");
const PORT = 3000;
// const requestLog = require('./middlewares/requestLog');// rotas gerais

const db = require('./database');

const app = express();

db.hasConection();

app.use(express.json());
// app.use(requestLog); // tem de colocar a request antes do routes.
app.use(routes);

app.listen(PORT, () => console.log("Servidor rodando da porta" + PORT))
const express = require('express');
const routes = require ("./routes");
const PORT = 3000;

const db = require('./database');

const app = express();

db.hasConection();

app.use(express.json());

app.use(routes);

app.listen(PORT, () => console.log("Servidor rodando da porta" + PORT))
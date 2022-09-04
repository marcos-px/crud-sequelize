const Sequelize = require('sequelize');

const DB_NAME = "loja";
const DB_USER = "root";
const DB_PASS = "mysql";
const DB_COFIG = {
    dialect: 'mysql',
    host: "localhost",
    port:3306
};

//gUARDA O DB

let db = {};


module.exports = db;
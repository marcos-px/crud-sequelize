const db = require("../database");
const { DataTypes} = require("sequelize");

const Produtos = db.define(
    "Produtos",
    {
        id: {
            type: DataTypes.INTEGER,
            primaryKey: true,
            autoIncrement: true
        },
        nome: {
            type: DataTypes.STRING,
        },
        preco: {
            type: DataTypes.FLOAT,
        },
        quantidade: {
            type: DataTypes.INTEGER,
        },
        createdAt: {
            type: DataTypes.DATE,
        },
        updatedAt: {
            type: DataTypes.DATE,
        },
    },
    {
        tableName: "produtos",
    }
);

module.exports = Produtos;
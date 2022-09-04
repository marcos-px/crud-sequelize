const db = require("../database");
const { DataTypes} = require("sequelize");

const Fabricantes = db.define(
    "Fabricantes",
    {
        id: {
            type: DataTypes.INTEGER,
            primaryKey: true,
            autoIncrement: true
        },
        nome: {
            type: DataTypes.STRING,
        },
        createdAt: {
            type: DataTypes.DATE,
        },
        updatedAt: {
            type: DataTypes.DATE,
        },
    },
    {
        tableName: "fabricantes",
    }
);

module.exports = Fabricantes;
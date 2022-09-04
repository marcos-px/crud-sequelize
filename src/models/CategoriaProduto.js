const db = require("../database");
const { DataTypes } = require("sequelize");

const Produtos = require("./produtos");
const Categorias = require("./Categorias");

const CategoriaProduto = db.define(
  "CategoriaProduto",
  {
    produto_id: {
      type: DataTypes.INTEGER,
      references: {
        model: Produtos,
        key: "id",
      },
    },
    categoria_id: {
      type: DataTypes.INTEGER,
      references: {
        model: Categorias,
        key: "id",
      },
    },
    createdAt: {
      type: DataTypes.DATE,
    },
    updatedAt: {
      type: DataTypes.DATE,
    },
  },
  {
    tableName: "categoria_produto",
  }
);

module.exports = CategoriaProduto;

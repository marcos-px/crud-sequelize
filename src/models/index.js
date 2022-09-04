const Fabricantes = require("./Fabricantes");
const Produtos = require("./Produtos")

Produtos.belongsTo(Fabricantes,{
    foreignKey: 'fabricante_id',
});

Fabricantes.hasMany(Produtos,{
    foreignKey: 'fabricante_id',
});

module.exports = {
    Fabricantes,
    Produtos
};
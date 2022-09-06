const { Produtos, Fabricantes } = require("../models");
const Categorias = require("../models/Categorias");

const produtoController = {
    listarProduto: async (req, res) => {

        const listaDeProdutos = await Produtos.findAll({
            include: Categorias
        });
        res.json(listaDeProdutos);
    },

  async  cadastrarProduto(req,res){
        console.log(req.user)// retorna o usuario que está usando o token

        
        const {nome, preco, quantidade, fabricante_id, categoria_id} = req.body;

        const novoProduto = await Produtos.create({
            nome, 
            preco, 
            quantidade,
            fabricante_id,
        });

        const categoria = await Categorias.findByPk(categoria_id);

        await novoProduto.setCategorias(categoria); //o nome do model
        res.status(201).json(novoProduto);
    },

    async deletarProduto(req,res){
        try{
            const {id} = req.params;

            await Produtos.destroy({
                where:{
                    id,
                }
            });
            res.status(204);
        } catch(err){
            return res.status(500).json("Ocorreu um erro, contate o master")
        }
    },

    async atualizarProduto(req,res){
        const {id} = req.params;
        const dados = "{nome, preco, quantidade}";
        const {nome, preco, quantidade} = req.body;

        if (!id) return res.status(400).json("id não enviado");
        const produtoAtualizado = await Produtos.update({
            nome, 
            preco, 
            quantidade,
        },
           {
            where:{
                id,
           }},
);
           res.json(`Produto: ${nome} Atualizado!`)
}
};

module.exports = produtoController;
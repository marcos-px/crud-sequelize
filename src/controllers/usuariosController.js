const { Usuarios } = require("../models");
const bcrypt = require("bcryptjs");

const usuariosController = {
async registro(req,res) {
    const {nome, email, senha} = req.body;
    const newSenha = bcrypt.hashSync(senha, 10);

    const newUsuario = await Usuarios.create({nome, email, senha: newSenha});

    return res.status(201).json(newUsuario);
},

};



module.exports = usuariosController;
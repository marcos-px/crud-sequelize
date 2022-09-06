const {Usuarios} = require("../models")
const bcrypt = require("bcryptjs")

const AuthController = {
    async login(req,res) {
        const { email, senha } = req.body;

        const usuario = await Usuarios.findOne({//Procura um, findALl procura vários
            where: {
                email,
            },
    });

    if (!usuario){
        return res.status(400).json("E-mail não cadastrado!")
    }

    if(!bcrypt.compareSync(senha, usuario.senha)){
        return res.status(401).json("Senha Inválida!")
    }

    return res.json("Logado!")
    },
};

module.exports = AuthController;
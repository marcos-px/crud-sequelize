const {Usuarios} = require("../models")
const jwt = require("jsonwebtoken")
const secret = require("../configs/secret")
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

    const token  = jwt.sign({
        id:usuario.id, 
        email:usuario.email, 
        nome:usuario.nome,
        userType: "admin"
    },
    secret.key
    );

    return res.json(token)
    },
};

module.exports = AuthController;
const { validate, Joi } = require("express-validation");

module.exports = validate({
// query
//params

    body: Joi.object({
        nome: Joi.string().min(4).max(30).required(),
        email: Joi.string().email().required(),
        senha: Joi.string().min(8).max(20).required(),
    }),
});
const { validate, Joi } = require("express-validation");

module.exports = validate({
// query
//params

    body: Joi.object({
        email: Joi.string().email().required(),
        senha: Joi.string().min(8).max(20).required(),
    }),
});
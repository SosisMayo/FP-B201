const joi = require("joi")

const pokemonValidation = joi.object({
    name : joi.string()
            .min(4)
            .max(20),
    type1 : joi.string()
            .valid('normal','fight','flying','poison','ground','rock','bug','ghost','steel','fire','water','grass','electric','psychic','ice','dragon','dark','fairy')
            .default('normal'),
    type2 : joi.string()
            .valid('normal','fight','flying','poison','ground','rock','bug','ghost','steel','fire','water','grass','electric','psychic','ice','dragon','dark','fairy'),
    total : joi.number()
            .integer()
            .min(100)
            .max(999)
            .default(350),
    hp : joi.number()
            .integer()
            .min(20)
            .max(999)
            .default(20),
    attack : joi.number()
            .integer()
            .min(20)
            .max(999)
            .default(20),
    defense : joi.number()
            .integer()
            .min(20)
            .max(999)
            .default(20),
    spAtt : joi.number()
            .integer()
            .min(20)
            .max(999)
            .default(20),
    spDeff : joi.number()
            .integer()
            .min(20)
            .max(999)
            .default(20),
    speed : joi.number()
            .integer()
            .min(20)
            .max(999)
            .default(20),
    generation : joi.number()
                .integer()
                .min(1)
                .max(9)
                .default(1),
    legendary : joi.boolean()
                .default(false),
})

const userValidation = joi.object({
    username : joi.string()
                .alphanum()
                .min(4)
                .max(10),
    password : joi.string()
                .pattern(new RegExp ('^(?=.*?[A-Z])(?=.*?[a-z])(?=.*?[0-9])(?=.*?[#?!@$%^&*-]).{8,}$')),
    role : joi.string()
            .valid('user','admin')
            .default('user'),
    refreshToken :joi.string()
})

module.exports = {pokemonValidation,userValidation}
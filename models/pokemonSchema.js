const mongoose = require("mongoose")

const PokemonSchema = mongoose.Schema({
    name : {
        type : String,
        required : [true,"Pokemon Harus Memiliki Nama"],
        min : [1,"Nama Pokemon Terlalu Pendek"],
        max : [255,"Nama Pokemon Terlalu Panjang"]
    },
    type1 : {
        type : String,
        required : true,
    },
    type2 : {
        type : String,
        required : false,    
    },
    total : {
        type : Number,
        required : true,
        default : 999
    },
    hp : {
        type : Number,
        required : true,
        default : 50
    },
    attack : {
        type : Number,
        required : true,
        default : 50
    },
    defense : {
        type : Number,
        required : true,
        default : 50
    },
    spAtt :{
        type : Number,
        required : true,
        default : 50
    },
    spDeff :{
        type : Number,
        required : true,
        default : 50
    },
    speed : {
        type : Number,
        required : true,
        default : 50
    },
    generation : {
        type : Number,
        required : true,
        default : 1
    },
    legendary : {
        type : Boolean,
        required : true,
        default : false
    },
})

module.exports = mongoose.model("pokemons", PokemonSchema)
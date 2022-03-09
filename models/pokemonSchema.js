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
        required : false
    },
    type2 : {
        type : String,
        required : false    
    },
    total : {
        type : Number,
        required : false
    },
    hp : {
        type : Number,
        required : false
    },
    attack : {
        type : Number,
        required : false
    },
    defense : {
        type : Number,
        required : false
    },
    spAtt :{
        type : Number,
        required : false
    },
    spDeff :{
        type : Number,
        required : false
    },
    speed : {
        type : Number,
        required : false
    },
    generation : {
        type : Number,
        required : false
    },
    legendary : {
        type : Boolean,
        required : false
    },
})

module.exports = mongoose.model("pokemons", PokemonSchema)
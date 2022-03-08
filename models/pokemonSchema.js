const mongoose = require("mongoose")

const PokemonSchema = mongoose.Schema({
    Name : {
        type : String,
        required : [true,"Pokemon Harus Memiliki Nama"],
        min : [1,"Nama Pokemon Terlalu Pendek"],
        max : [255,"Nama Pokemon Terlalu Panjang"]
    },
    Type1 : {
        type : String,
        required : false
    },
    Type2 : {
        type : String,
        required : false    
    },
    Total : {
        type : Number,
        required : false
    },
    HP : {
        type : Number,
        required : false
    },
    Attack : {
        type : Number,
        required : false
    },
    Defense : {
        type : Number,
        required : false
    },
    SpAtt :{
        type : Number,
        required : false
    },
    SpDeff :{
        type : Number,
        required : false
    },
    Speed : {
        type : Number,
        required : false
    },
    Generation : {
        type : Number,
        required : false
    },
    Legendary : {
        type : Boolean,
        required : false
    },
})

module.exports = mongoose.model("pokemons", PokemonSchema)
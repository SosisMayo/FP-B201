const joi = require('joi')
const mongoose = require('mongoose')

const UserSchema =  mongoose.Schema({
    username : {
        type : String,
        min : 8,
        max : 20,
        required : true,
        unique : true
    },
    password :{
        type : String,
        min : 8,
        max : 20,
        required : true
    },
    role : {
        type : String,
        enum : ["user","admin"],
        default : "user"
    },
    refreshToken :{
        type : String,
        default : null
    }
})

module.exports = mongoose.model("users", UserSchema)
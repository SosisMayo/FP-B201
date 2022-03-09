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
        max : 20
    },
    role : {
        type : String,
        enum : ["user","admin"],
        default : "user"
    }
})

module.exports = mongoose.model("users", UserSchema)
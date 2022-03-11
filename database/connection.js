const mongoose = require("mongoose")
require("dotenv/config")

async function start(){
    try {
        mongoose.connect(process.env.DB_CONNECTION,
            {useNewUrlParser : true,},
            () => {
                return console.log("DB Connected!")
            })
    } catch (err) {
        handleError(err)
    }
}

start()
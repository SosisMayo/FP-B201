const mongoose = require("mongoose")
require("dotenv/config")

mongoose.connect(process.env.DB_CONNECTION,
    {
    useNewUrlParser : true,
    },
    () => console.log("DB Connected!")
)
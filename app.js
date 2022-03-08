const express = require("express")
const app = express()
const bodyparser = require("body-parser")
const pokemonRouter = require("./routes/pokemon.js")
const userRouter = require("./routes/user.js")

const PORT = 3000

app.use(bodyparser.json())

// Database Connection
require("./database/connection.js")

//Middleware Untuk Route Pokemon
app.use('/pokemon', pokemonRouter)

//Middleware Untuk Route User
//app.use("/user",userRouter)

app.listen(PORT, ()=>{
    console.log(`Server berjalan di port ${PORT}`);
})
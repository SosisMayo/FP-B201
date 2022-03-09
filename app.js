const express = require("express")
const app = express()
const bodyparser = require("body-parser")
const mainRouter = require("./routes")

const PORT = 3000

app.use(bodyparser.json())

// Database Connection
require("./database/connection.js")

//Route
app.use("/api",mainRouter)


app.listen(PORT, ()=>{
    console.log(`Server berjalan di port ${PORT}`);
})
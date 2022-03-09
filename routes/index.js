const express = require('express')
const app = express()
const router = express.Router()
const pokemonRouter = require("./pokemon")
const userRouter = require("./user")
//const authRouter = require("./auth.js")

//Middleware Untuk Route Pokemon
router.use('/pokemon', pokemonRouter)

//Middleware Untuk Route User
router.use("/user",userRouter)

module.exports = router
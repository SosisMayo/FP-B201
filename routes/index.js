const express = require('express')
const app = express()
const router = express.Router()
const pokemonRouter = require("./pokemon")
const userRouter = require("./user")
const authRouter = require("./auth.js")

//Route Pokemon
router.use('/pokemon', pokemonRouter)

//Route User
router.use("/user",userRouter)

//Route Auth
router.use('/auth',authRouter)

module.exports = router
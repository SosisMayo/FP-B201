const express = require("express")
const router = express.Router()
const authController = require("../controllers/auth")
const tokenValidation = require("../validation/tokenValidation")
const refreshValidation = require("../validation/refreshValidation")

// REGISTER
router.post("/register", authController.register)

// LOGIN
router.post("/login", authController.login)

//REFRESH TOKEN
router.get("/token", refreshValidation, authController.refresh)

//LOGOUT
router.get("/logout", tokenValidation, authController.logout)

module.exports = router
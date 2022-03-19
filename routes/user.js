const express = require("express")
const router = express.Router()
const tokenValidation = require("../validation/tokenValidation")
const userController = require("../controllers/user")
const User = require('../models/userSchema')
const pagination = require('../utils/pagination')
const bcrypt = require("bcrypt")

// READ ALL USER
router.get('/', tokenValidation, pagination.pagination(User), userController.getAllUser)

// READ USER BY NAME
router.get('/:username',tokenValidation, userController.getUserByUsername)

// UPDATE USER BY ID
router.put('/:username',tokenValidation, userController.updateUserByUsername)

// DELETE USER BY USERNAME
router.delete("/:username", tokenValidation, userController.deleteUserByUsername)

module.exports = router
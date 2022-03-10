const express = require("express")
const router = express.Router()
const User = require("../models/userSchema")
const bcrypt = require("bcrypt")
const jwt = require("jsonwebtoken")

// REGISTER
router.post("/register", async (req,res)=>{
    const salt = await bcrypt.genSalt(5)
    try{
        const user = new User({
            username : req.body.username,
            password : await bcrypt.hash(req.body.password,salt),
            role : req.body.role
        })
        await user.save()
        res.status(201).json({
            message : "User berhasil dibuat",
            data : user
        })
    }
    catch(err){
        res.status(400).json({
            message : "Bad Request!",
            error : err.message
        })
    }
})

//LOGIN
router.post("/login", async (req,res)=>{
    try{
        const user = await User.findOne({
            username : req.body.username
        })
        if(user){
            bcrypt.compare(req.body.password,user.password,(err,resp)=>{
                if (err){
                    res.status(400).json({
                        message : "Bad Request!",
                        error : err.message
                    })
                }
                if(resp){
                    const accessToken = jwt.sign({username:user.username,role:user.role},process.env.JWT_ACCESS_TOKEN)
                    res.header("Authorization",accessToken).status(200).json({
                        accessToken
                    })
                }
                else{
                    res.status(400).json({
                        message : "Password Salah",
                    })
                }
            })
        }
    }
    catch(err){
        res.status(400).json({
            message : "Bad Request!",
            error : err.message
        })
    }
})

module.exports = router
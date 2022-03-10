const User = require("../models/userSchema")
const bcrypt = require("bcrypt")
const jwt = require("jsonwebtoken")

exports.register = async function(req,res){
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
}

exports.login = async function(req,res){
    const user = await User.findOne({
        username : req.body.username
    })
    if(user){
        bcrypt.compare(req.body.password,user.password,async (err,resp)=>{
            if (err){
                res.status(400).json({
                    message : "Bad Request!",
                    error : err.message
                })
            }
            if(resp){
                const accessToken = jwt.sign({username:user.username,role:user.role},process.env.JWT_ACCESS_TOKEN,{expiresIn:"30s"})
                const refreshToken = jwt.sign({username:user.username,role:user.role},process.env.JWT_REFRESH_TOKEN,{expiresIn:"1h"})
                try{
                    await User.findOneAndUpdate({
                        username : req.body.username
                    },
                    {
                        refreshToken : refreshToken
                    })
                    res.header("Authorization",accessToken).status(200).json({
                        accessToken,
                        refreshToken
                    })
                } catch (err) {
                    res.status(400).json({
                        message : "Bad Request!",
                        error : err.message
                    })
                }    
            }
            else{
                res.status(400).json({
                    message : "Password Salah",
                })
            }
        })
    }
}

exports.refresh = async function(req,res){
    const user = await User.findOne({
        username : req.user.username
    })
    if(user){
        const accessToken = jwt.sign({username:user.username,role:user.role},process.env.JWT_ACCESS_TOKEN,{expiresIn:"30s"})
        try{
            res.header("Authorization",accessToken).status(200).json({
                accessToken
            })
        }
        catch(err){
            res.status(400).json({
                message : "bad Request!",
                error : err.message
            })
        }
    }
    else{
        res.status(404).json({
            message : "Not Found!",
            error : "Data User Tidak Ditemukan"
        })
    }
}

exports.logout = async function(req,res){
    const user = await User.findOne({
        username : req.user.username
    })
    if(user){
        try {
            user.refreshToken = null
            await user.save()
            res.status(200).json({
                message : "Sukses Logout!"
            })
        } catch (err) {
            res.status(400).json({
                message : "Bad Request!",
                error : err.message
            })
        }
    }
    else{
        res.status(404).json({
            message : "Not Found!",
            error : "User Tidak Ditemukan"
        })
    }
}
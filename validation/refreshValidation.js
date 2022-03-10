const jwt = require("jsonwebtoken")
const User = require("../models/userSchema")


module.exports = async function auth (req,res,next){
    //Harus punya access token, artinya sudah login
    const accessToken = req.header("Authorization")
    
    //Refresh Token
    const refreshToken = req.header("Refresh")

    if (!accessToken){
        res.status(401).json({
            message : "Akses Ditolak!"
        })
    }
    if (!refreshToken){
        res.status(403).json({
            message : "Anda Tidak memiliki refresh token"
        })
    }
    try {
        const verified = jwt.verify(refreshToken,process.env.JWT_REFRESH_TOKEN)
        const user = await User.findOne({username : verified.username})
        if(verified && user.refreshToken!==null){
            req.user = verified
            next()
        }
        else{
            res.status(400).json({
                message : "Bad Request!",
                error : "Anda belum login"
            })
        }
    } catch (err) {
        res.status(400).json({
            message : "Salah",
            error : err.message
        })
    }
}
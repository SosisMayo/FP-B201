const jwt = require("jsonwebtoken")

module.exports = function auth (req,res,next){
    const token = req.header("Authorization")
    if (!token){
        res.status(401).json({
            message : "Akses Ditolak!"
        })
    }
    try {
        const verified = jwt.verify(token,process.env.JWT_ACCESS_TOKEN)
        if(verified){
            req.user = verified
            next()
        }
    } catch (err) {
        res.status(400).json({
            message : "Bad Request!",
            error : err.message
        })
    }
}
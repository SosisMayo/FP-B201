const User = require("../models/userSchema")
const bcrypt = require("bcrypt")

exports.getAllUser = async function(req,res){
    // Jika admin tampilkan semua data user
    if(req.user.role == "admin"){
        try {
            const user =  await User.find().select({_id:0,__v:0})
            if (user[0]){
                res.status(200).json({
                    message : "Sukses!",
                    data : user
                })
            }
            else{
                res.status(404).json({
                    message : "Not Found!",
                    error : "Tidak ada data user"
                })
            }
        }
        catch(err){
            res.status(400).json({
                message : "Bad Request!",
                error : err
            })
        }
    }
    // Jika user, hanya tampilkan data miliknya
    else if(req.user.role == "user"){
        const user = User.findOne({
            username : req.user.username
        }).select({_id:0,__v:0})
        if(user){
            try {
                res.status(200).json({
                    message : "Sukses!",
                    data : req.user
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
                error : "Data anda tidak ditemukan"
            })
        }
    }
}

exports.getUserByUsername = async function(req,res){
    // Admin bisa melihat user siapapun
    if(req.user.role == "admin"){
        try {
            const user = await User.findOne({
                username : req.params.username
            }).select({_id:0,__v:0,password:0})
            if(user){
                res.status(200).json({
                    message : "Sukses!",
                    data : user
                })
            }
            else{
                res.status(404).json({
                    message : "Not Found!",
                    error : `Data user dengan nama ${req.params.username} tidak ditemukan`
                })
            }
        }
        catch(err){
            res.status(400).json({
                message : "Bad Request!",
                error : err.message
            })
        }
    }
    // User hanya bisa melihat dirinya sendiri
    if(req.user.role == "user"){
        if(req.user.username == req.params.username){
            try {
                res.status(200).json({
                    message : "Sukses!",
                    data : req.user
                })
            } catch (err) {
                res.status(400).json({
                    message : "Bad Request!",
                    error : err
                })
            }
        }
        else {
            res.status(403).json({
                message : "Dilarang mengakses data user lain"
            })
        }
    }
}

exports.updateUserByUsername = async function(req,res){
    // Admin bisa ganti semua data
    if(req.user.role == "admin"){
        let user = await User.findOne({
            username : req.params.username
        })
        if (user){
            if (req.body.role ){
                res.status(400).json({
                    message : "Bad Request!",
                    error : "Hanya dapat mengubah username dan password"
                })
            }
            try{
                if(req.body.username){
                    user.username = req.body.username
                }
                if(req.body.password){
                    const salt = await bcrypt.genSalt(5)
                    user.password = await bcrypt.hash(req.body.password,salt)
                }
                await user.save()
                res.status(200).json({
                    message : "Sukses!",
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
        else{
            res.status(404).json({
                message : "Not Found!",
                error : `Data user dengan nama ${req.params.username} tidak ditemukan`
            })
        }
    }
    // User hanya bisa ganti data dia sendiri
    else if(req.user.role == "user"){
        const thisUser = await User.findOne({
            username : req.params.username
        })
        if(thisUser){
            if (req.user.username == req.params.username){
                if (req.body.role){
                    res.status(400).json({
                        message : "Bad Request!",
                        error : "Hanya dapat mengubah username dan password"
                    })
                }
                try{
                    if(req.body.username){
                        thisUser.username = req.body.username
                    }
                    if(req.body.password){
                        const salt = await bcrypt.genSalt(5)
                        thisUser.password = await(bcrypt.hash(req.body.password,salt))
                    }
                    await thisUser.save()
                    res.status(200).json({
                        message : "Sukses!",
                        data : thisUser
                    })
                }
                catch(err){
                    res.status(400).json({
                        message : "Bad Request!",
                        error : err.message
                    })
                }
            }
            else{
                res.status(403).json({
                    message : "Dilarang mengubah data user lain!"
                })
            }
        }
        else{
            res.status(404).json({
                message : "Not Found!",
                error : `Data user dengan nama ${req.params.username} tidak ditemukan`
            })
        }
    }
}

exports.deleteUserByUsername = async function(req,res){
    // Hanya admin yang bisa delete user
    if(req.user.role == "admin"){
        const user = await User.findOne({
            username : req.params.username
        })
        if (user){
            try{
                await User.deleteOne({
                    username : user.username
                })
                res.status(200).json({
                    message : `Data User ${req.params.username} Telah Dihapus!`
                })
            }
            catch(err){
                res.status(400).json({
                    message : "Bad Request!",
                    error : err.message
                })
            }
        }
        else{
            res.status(404).json({
                message : "Not Found!",
                error : `Data user dengan nama ${req.params.username} tidak ditemukan`
            })
        }
    }
}
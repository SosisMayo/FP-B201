const express = require("express")
const router = express.Router()
const User = require("../models/userSchema")

// CREATE USER
router.post("/", async (req,res)=>{
    try{
        const user = new User({
            username : req.body.username,
            password : req.body.password,
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

// READ ALL USER
router.get('/', async (req,res)=>{
    try {
        const user =  await User.find().select({_id:0,__v:0,password:0})
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

})

// READ USER BY NAME
router.get('/:username', async (req,res)=>{
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
})

// UPDATE USER BY ID
router.put('/:username',async (req,res)=>{
    let user = await User.findOne({
        username : req.params.username
    })
    if (user){
        if (req.body.role){
            res.status(400).json({
                message : "Bad Request!",
                error : "Hanya dapat mengubah username dan password"
            })
        }
        try{
            Object.assign(user,req.body)
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
})

// DELETE USER BY USERNAME
router.delete("/:username", async (req,res)=>{
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
})
module.exports = router
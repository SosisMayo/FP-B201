const express = require("express")
const router = express.Router()
const Pokemon = require("../models/pokemonSchema")

//CREATE POKEMON
router.post("/",async (req,res)=>{
    // Cari apa namanya ada atau tidak
    const poke = await Pokemon.find({
        Name : req.body.Name
    })
    // Kalau ada
    if(poke[0]){
        res.status(400).send(`Data Pokemon ${req.body.Name} sudah ada!`)
    }
    // Kalau gak ada
    else{
        const Poke = new Pokemon({
            Name : req.body.Name,
            Type1 : req.body.Type1,
            Type2 : req.body.Type2,
            Total : req.body.Total,
            HP : req.body.HP,
            Attack : req.body.Attack,
            Defense : req.body.Defense,
            SpAtt : req.body.SpAtt,
            SpDeff : req.body.SpDeff,
            Speed : req.body.Speed,
            Generation : req.body.Generation,
            Legendary : req.body.Legendary,
        });
        try{
            await Poke.save()
            res.status(201).json({
                message : `${req.body.Name} telah ditambahkan!`,
                data : req.body
            })
        }    
        catch(err){
            res.status(400).json({
                message : "Bad Request!",
                error : err.message
            })
        }
    }
})

//READ ALL POKEMON
router.get("/", async (req,res)=>{
    // Cari apa sudah ada data pokemon
    const poke = await Pokemon.find();
    // Kalau ada
    if(poke[0]){
        try{
            res.status(200).json({
                message : "Sukses!",
                data : poke
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
            message : "Data Pokemon Tidak Ditemukan!"
        })
    }
})

//READ POKEMON BY NAME
router.get("/:name", async (req,res)=>{
    const poke = await Pokemon.find({
        Name : req.params.name
    })
    if (poke[0]){
        try{
            res.status(200).json({
                message : "Sukses!",
                data : poke
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
            message : `Not Found!`,
            error : `Data Pokemon ${req.params.name} Tidak Ditemukan!`
        })
    }
})

//UPDATE POKEMON BY ID
router.put('/:name',async (req,res)=>{
    let poke = await Pokemon.find({
        Name : req.params.name
    })
    if (poke[0]){
        if (req.body.Name || req.body.Legendary || req.body.Generation){
            res.status(400).json({
                message : "Bad Request!",
                error : "Nama,Generasi, dan status Legendary Pokemon Tidak Dapat Diubah"
            })
        }
        try{
            Object.assign(poke[0],req.body)
            await poke[0].save()
            res.status(200).json({
                message : "Sukses!",
                data : poke[0]
            })
        }
        catch(err){
            res.status(400).json({
                message : "Bad Request!",
                error : err
            })
        }
    }
    else{
        res.status(404).json({
            message : "Not Found!",
            error : `Data Pokemon ${req.params.name} Tidak Ditemukan!`
        })
    }
})
//DELETE POKEMON BY NAME
router.delete("/:name", async (req,res)=>{
    const poke = await Pokemon.find({
        Name : req.params.name
    })
    if (poke[0]){
        try{
            await Pokemon.deleteOne({
                Name : req.params.name
            })
            res.status(200).json({
                message : `Data Pokemon ${req.params.name} Telah Dihapus!`
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
            error : `Data Pokemon ${req.params.name} Tidak Ditemukan!`
        })
    }
})

module.exports = router
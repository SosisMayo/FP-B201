const Pokemon = require("../models/pokemonSchema")
const {pokemonValidation} = require("../validation/inputValidation")

exports.createPokemon = async function(req,res){
    if(req.user.role == "admin"){
        try {
            const {error,value} = await pokemonValidation.validateAsync(req.body)
        } catch (error) {
            res.status(400).json({
                message : "Bad Request!",
                error : error.message
            })
        }
        // Cari apa namanya ada atau tidak
        const poke = await Pokemon.find({
            name : req.body.name
        })
        // Kalau ada
        if(poke[0]){
            res.status(400).json({
                message : `Data Pokemon ${req.body.name} sudah ada!`
            })
        }
        // Kalau gak ada
        else{
            const Poke = new Pokemon({
                name : req.body.name,
                type1 : req.body.type1,
                type2 : req.body.type2,
                total : req.body.total,
                hp : req.body.hp,
                attack : req.body.attack,
                defense : req.body.defense,
                spAtt : req.body.spAtt,
                spDeff : req.body.spDeff,
                speed : req.body.speed,
                generation : req.body.generation,
                legendary : req.body.legendary,
            });
            try{
                await Poke.save()
                res.status(201).json({
                    message : `${req.body.name} telah ditambahkan!`,
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
    }
    else{
        res.status(403).json({
            message : "User dilarang melakukan POST"
        })
    }
}

exports.getAllPokemon = async function(req,res){
    if(res.result){
        res.status(200).json({
            message : "Sukses!",
            data : res.result
        })
    }
    else{
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
    }
}

exports.getPokemonByName = async function(req,res){
    const poke = await Pokemon.find({
        name : req.params.name
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
}

exports.updatePokemonByName = async function(req,res){
    try {
        const {error,value} = await pokemonValidation.validateAsync(req.body)
        if(req.user.role == "admin"){
            let poke = await Pokemon.find({
                name : req.params.name
            })
            if (poke[0]){
                if (req.body.name || req.body.legendary || req.body.generation){
                    res.status(400).json({
                        message : "Bad Request!",
                        error : "Nama,Generasi, dan status Legendary Pokemon Tidak Dapat Diubah"
                    })
                }
                else{
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
            }
            else{
                res.status(404).json({
                    message : "Not Found!",
                    error : `Data Pokemon ${req.params.name} Tidak Ditemukan!`
                })
            }
        }
        else {
            res.status(403).json({
                message : "User dilarang melakukan perubahan data"
            })
        }
    } catch (error) {
        res.status(400).json({
            message : "Bad Request!",
            error : error.message
        })
    }
}

exports.deletePokemonByName = async function(req,res){
    if(req.user.role == "admin"){
        const poke = await Pokemon.find({
            name : req.params.name
        })
        if (poke[0]){
            try{
                await Pokemon.deleteOne({
                    name : req.params.name
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
    }
    else {
        res.status(403).json({
            message : "User dilarang melakukan delete"
        })
    }
}


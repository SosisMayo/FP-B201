const Pokemon = require('../models/pokemonSchema')
const User = require('../models/userSchema')

function pagination(models){
    return async (req,res,next) => {
        if(req.query){
            const {page,limit} = req.query
            const start = (page - 1) * limit
            const end = (page*limit) -1
    
            try {
                const result = await models.find().limit(limit).skip(start).exec()
                res.result = result
                next()
            } catch (err) {
                res.status(400).json({
                    message : "Error",
                    error : err.message
                })
            }
        }
        else{
            next()
        }
    }
}

module.exports = {pagination}
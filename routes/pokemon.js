const express = require("express")
const req = require("express/lib/request")
const router = express.Router()
const tokenValidation = require("../validation/tokenValidation")
const pokemonController = require("../controllers/pokemon")

//CREATE POKEMON
router.post("/",tokenValidation, pokemonController.createPokemon)

//READ ALL POKEMON
router.get("/", pokemonController.getAllPokemon)

//READ POKEMON BY NAME
router.get("/:name", pokemonController.getPokemonByName)

//UPDATE POKEMON BY NAME
router.put('/:name', tokenValidation, pokemonController.updatePokemonByName)

//DELETE POKEMON BY NAME
router.delete("/:name", tokenValidation, pokemonController.deletePokemonByName)

module.exports = router
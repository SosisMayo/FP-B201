const {buildSchema} = require("graphql")
const Pokemon = require("../models/pokemonSchema")
const User = require("../models/userSchema")

exports.schema = buildSchema(`
    type Pokemon {
        name : String!
        type1 : String!
        type2 : String!
        total : Int!
        hp : Int!
        attack : Int!
        defense : Int!
        spAtt : Int!
        spDeff : Int!
        speed : Int!
        generation : Int!
        legendary : Boolean!
    }

    type User {
        username : String!
        password : String!
        role : role!
    }

    enum role{
        admin
        user
    }

    type Query {
        getAllPokemon : [Pokemon!]!
        getPokemonByName(name : String!) : Pokemon!
        getAllUser : [User!]!
    }
`)

exports.root = {
    getAllPokemon : async () => {
        const pokemon = await Pokemon.find()
        return pokemon
    },

    getPokemonByName : async (args) => {
        const pokemon = await Pokemon.findOne({name : args.name})
        if (pokemon){
            return pokemon
        }
    },

    getAllUser : async (context) => {
        console.log(context)
    }
}
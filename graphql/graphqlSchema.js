const {buildSchema} = require("graphql")
const pokemonController = require("../controllers/pokemon")

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
    type Query {
        hello : String
        getAllPokemon : [Pokemon]
    }
`)

exports.root = {
    hello : ()=> {
        return "Hello World"
    },
    getAllPokemon : async function(){
        //const pokemon = await fetch('localhost:3000/api/pokemon')
        return []
    }
}
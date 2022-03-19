const express = require("express")
const app = express()
const bodyparser = require("body-parser")
const {graphqlHTTP} = require("express-graphql")
const graphqlSchema = require("./graphql/graphqlSchema")
const mainRouter = require("./routes")
const req = require("express/lib/request")

const startApp = async function(){
    app.use(bodyparser.json())

    // Database Connection
    await require("./database/connection.js")
    
    //Route
    app.use("/graphql", graphqlHTTP({
        schema : graphqlSchema.schema,
        rootValue : graphqlSchema.root,
        graphiql : true,
        context : req.user
    }))

    app.use("/api", mainRouter)

    app.listen(process.env.PORT, ()=>{
        console.log(`Server berjalan di port ${process.env.PORT}`);
    })
}

startApp()
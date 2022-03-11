const express = require("express")
const app = express()
const bodyparser = require("body-parser")
const {graphqlHTTP} = require("express-graphql")
const graphqlSchema = require("./graphql/graphqlSchema")
const mainRouter = require("./routes")

const startApp = async function(){
    app.use(bodyparser.json())

    // Database Connection
    await require("./database/connection.js")
    
    //Route

    const corsOptions = {
        origin: "http://localhost:3000",
        credentials: true
      };
    app.use("/graphql", graphqlHTTP({
        schema : graphqlSchema.schema,
        rootValue : graphqlSchema.root,
        graphiql : true,
        cors : corsOptions
    }))

    app.use("/api", mainRouter)

    app.listen(process.env.PORT, ()=>{
        console.log(`Server berjalan di port ${process.env.PORT}`);
    })
}

startApp()
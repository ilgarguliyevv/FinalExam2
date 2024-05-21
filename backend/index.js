const express = require("express")
const routes= require("./routes/routes.js")
require("dotenv").config()
require("./config/db")

const bodyParser=require("body-parser")

const PORT = process.env.PORT

const app = express()

app.use(bodyParser.json())

app.use("/", routes)

app.listen(PORT,()=> {
    console.log("Server has started" + PORT);
})
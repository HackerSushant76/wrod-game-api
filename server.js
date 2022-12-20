const express = require("express")
const { getReandomWord } = require("./Controllers/randomword")
const cors = require("cors")
const { addData, getData } = require("./Controllers/dashboard")
const { connection } = require("./config/db")
require("dotenv").config()
const PORT = process.env.PORT || 8080

const app = express()

app.use(express.json())
app.use(cors())
app.get("/",(req,res)=>{
    res.send("helllllo")
})

app.get("/randomword",getReandomWord)

app.post("/adddata" , addData)

app.get("/dashboard" , getData)

app.listen(PORT,async()=>{
    try{
        await connection
        console.log("succesfully connected to db")
    }
    catch(err){
        console.log(err)
    }
    console.log(`listenning on port-- ${PORT}`)
})
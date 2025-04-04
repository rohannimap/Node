const { log } = require('console')
const express = require('express')
const app = express()
const port = 8080
const path = require("path")

app.set("view engine","views")
app.set("view",path.join(__dirname,"views"))

app.set(express.urlencoded({extended:true}))
app.use(express.json())
app.set(express.static(path.join(__dirname,"public")))


app.listen(port,()=>{
    console.log(`app listen on the ${port}`);
    
})
app.get("/",(req,res)=>{
    res.send("this is the home page")
})





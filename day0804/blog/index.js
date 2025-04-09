const express = require("express")
const app = express()
require("dotenv").config()
const PORT = process.env.PORT || 3000


app.use(express.json())

const blog = require("./routes/blog")
app.use("/api",blog)

const DbConnet = require("./config/database")
DbConnet();

app.listen(PORT,()=>{
    console.log(`app listen on the ${PORT}`);
    
})

app.get("/",(req,res)=>{
    res.send("hello")
})


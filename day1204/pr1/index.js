const express = require("express")
const app = express()
require("dotenv").config()

const PORT = process.env.PORT || 3000

app.use(express.json())

const blog = require("./routes/blog")
app.use("/api",blog)

const Dbserver  = require("./config/database")
Dbserver()

app.listen(PORT,()=>{
    console.log("star at port ",PORT);
    
})

app.get("/",(req,res)=>{
res.send("this is the home page")
}
)
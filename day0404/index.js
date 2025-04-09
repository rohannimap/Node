
const express = require("express")
const app = express()
const port = 8080
app.use(express.urlencoded({extended:true}))
app.use(express.json())

app.listen(port,()=>{
    console.log(`app listen on the port ${port}`);
})


app.get("/register",(req,res)=>{
    res.send("this is the get")
})
app.post("/register",(req,res)=>{
    let {username,password}=req.body
    
    res.send(`this is the user ${username}, and passord is ${password}`)
})





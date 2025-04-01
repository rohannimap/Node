const express  = require("express")
const  app = express()

app.use(express.urlencoded({extended:true}))
app.use(express.json())
const  port =  8080


app.listen(port,()=>{
    console.log(`app listen on the ${port}`);
    
})

app.get("/register", (req,res)=>{
    // let {name,password} = req.query;
    // res.send(`this is get request by ${name}`)
})  

app.post("/register",(req,res)=>{
    console.log(req.body);
    let {user,password}=req.body
    
    res.send(`the post request ${user}`)
})
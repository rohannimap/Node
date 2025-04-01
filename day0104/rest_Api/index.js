const { log } = require("console")
const express = require("express")
const  app = express()
const port = 8080
const path  = require("path")
app.set("view engine","ejs")
app.set("views",path.join(__dirname,"views"))
app.set(express.static(path.join(__dirname,"public")))
app.use(express.urlencoded({extended:true})) 
app.use(express.json())

app.listen(port,()=>{ 
    console.log("app listen on port " + port);
    
})



let posts = [
    {
        id:"1",
        username : "rohan",
        content : "check 1"
    },
    {
        id:"2",
        username : "rajesh",
        content : "check 2"
    },
    {
        id:"3",
        username : "hakke",
        content : "check 3"
    }
]

app.get("/",(req,res)=>{
    res.send("it is woked")
})

app.get("/posts",(req,res)=>{
    // res.send("post")
    res.render("index.ejs",{posts})
})

app.get("/posts/new",(req,res)=>{
    res.render("new.ejs")
})
app.get("/posts/:id",(req,res)=>{
   let  { id} = req.params;
   console.log(id);
   let post = posts.find((p)=>id == p.id);
   console.log(post);
  res.render("show.ejs")
})

app.post("/posts",(req,res)=>{
    let {username,content}=req.body;
    posts.push({username,content})
   console.log(req.body);
   res.send("the is working post")
   res.redirect("/posts/")
   
})


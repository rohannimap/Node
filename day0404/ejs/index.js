const express = require("express")
const app = express()
const port = 8080
app.set("view engine","ejs")
const path = require("path")
app.set("views",path.join(__dirname,"views"))

app.listen(port,()=>{
    console.log("app listen on port ");
})
app.get("/",(req,res)=>{
    res.render("home.ejs")
})
app.get("/rolldice",(req,res)=>{
        let roll = Math.floor(Math.random()*6)+1 ;
    // res.render("rolldice.ejs",{num})
    res.render("rolldice.ejs",{num :roll})
})

//count increament
let count = 0
app.get("/count",(req,res)=>{
        count+=1
    // res.render("rolldice.ejs",{num})
    res.render("checknumber.ejs",{count})
})

let accdetails = []
//search name or params use and store the in the array
app.get("/:username",(req,res)=>{
    let {username} = req.params;
    // console.log(username);
    accdetails.push(username);
    console.log(accdetails);
    
    
})

// app.get("/:username/:surname",(req,res)=>{
//         let { username,surname}= req.params;
//         console.log(username);
//         console.log(surname);
// })
//provide array and make some operation
app.get("/:username/acc",(req,res)=>{

    res.render("acc.ejs",{accdetails})
})




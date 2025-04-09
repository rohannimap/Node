const express = require("express")
const app = express()
const port = 8080

app.listen(port,()=>{
    console.log(`app listen on the port ${port}`);
})
// app.get("/",(req,res)=>{
//     // console.log(req.body);c

//     res.send("hello")
// })
app.get("/",(req,res)=>{
    res.send("this is the home page")
})

// test the how to set work
// let a = new Set();
// app.get("/:username/:surname",(req,res)=>{
//     let { username,surname}= req.params;
//     console.log(username);
//     console.log(surname);
    
//     a.add(name = username,lastname = surname)
//     let message = `welcome ${username} and also ${surname}`
//     res.send(message)
//     console.log(a);
// })





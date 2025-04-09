// console.log("hello");
// const http = require("http")

// const server = http.createServer((req,res)=>{
//     console.log(req.url,req.headers,req.method);

// })
// server.listen(8080,()=>{
//     console.log("server listn on the 8080");

// })


const express = require("express")
const app = express()
const port = 8080

app.listen(port,()=>{
    console.log(`server connet succesfuly on port ${port}`);
})
// app.use("/",(req,res)=>{
//     console.log("hello");
    
// })
app.get("/test",(req,res)=>{
    res.send("check")
})
app.post("/t",(req,res)=>{
    console.log(req.body);
    
    res.send("che")
})










// function check(n){
//     let a = Math.round(n/2) 
//      let isprime = []
//      let prime = false
//     for(let i = 2;i<15;i++){
//          test(i)
//     }
//     function test(num){
//         for(let j = 2;j<a;j++){
//             if(num%j === 0){
//                 // prime = false
//                 break;
//             }else{
//                 isprime.push(num)
//             }
//         }
//     }
//     console.log(... new Set(isprime) );  
// }
// check(15)
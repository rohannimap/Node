const http = require("http")
const fs = require("fs")
const url = require("url")

const server=  http.createServer((req,res)=>{
    res.end("hello it is server http ")
    console.log(req.url);
    
})
server.listen(8080,'127.0.0.1',()=>{
    console.log("node server start at port 8080");
    
})

const fs = require("fs")
const os = require("os")
const http = require("http")
// fs.writeFileSync("./text.txt","hello i am rohan")
// fs.writeFile("./text.txt","hello i ")

// const data =fs.readFileSync("./contach.txt","utf-8")
// console.log(data);
// fs.readFile("./contach.txt","utf-8",(err,data)=>{     //in the without callback give error
// if(err){
//     console.log(err);
// }else{
//     console.log(data);
// }
// })

// fs.appendFileSync("./text.txt",` ${Date.now()} hello\n`)

// fs.unlinkSync("./contach.txt")    // it is use for delete
// console.log(fs.statSync("./text.txt"));   // give file alld etails and stat
// console.log(fs.statSync("./text.txt").isFile());   // give file stat and after chech opration 
// fs.mkdirSync("rohan")    //create folder

// console.log(os.cpus().length);

// console.log("1");
//  let data= fs.readFileSync("./text.txt","utf-8")
// console.log(data);

// console.log("2");
// console.log("3");



// const server  = http.createServer((req,res)=>{
//     let logI = `check req at ${Date.now()}, and the req is ${req.body}`

//     console.log(req.headers);
    
// res.end("hello it is http")
// })

// server.listen(3000,()=>{
//     console.log("server start on 3000");
    
// })


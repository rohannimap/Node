const express = require("express")
const app = express()
const port = 8080
const fs = require("fs")

let arr = [1,2,3,4,5,6,7]
app.get("/",(req,res)=>{
// fs.readFileSync("./log.txt",logI)
res.send("this is the home page")
})
app.get("/element",(req,res)=>{
res.send(arr)
})
app.get("/prime",(req,res)=>{
    function isPrime(num) {
        if (num <= 1) return false;
        if (num === 2) return true;
        if (num % 2 === 0) return false;
    
        for (let i = 3; i <= Math.sqrt(num); i += 2) {
            if (num % i === 0) return false;
        }
        return true;
    }
    const primes = arr.filter(isPrime);
res.send(primes)
})
app.get("/:num",(req,res)=>{
    const {num} = req.params
    arr.push(Number(num) )
    res.send(arr)
}
    
)
app.listen(port,()=>{
    console.log("app listen on the ",port);
    
})
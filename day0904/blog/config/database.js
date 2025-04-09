
const mongoose = require("mongoose")
require("dotenv").config()

const DbConnet = ()=>{
    mongoose.connect(process.env.DATABASE_URL)
    .then(()=>{console.log("connect succesfuly")})
    .catch((err)=>{
        console.log(err.message);
        process.exit(1)
        
    })
}

module.exports = DbConnet

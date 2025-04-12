const mongoose = require("mongoose")
require("dotenv").config()
const Dbserver = ()=>{
    mongoose.connect(process.env.DATABASE_URL)
    .then(()=>{
        console.log("connected succesfuly")}).catch((err)=>{
         
            console.error(err);
            process.exit(1)            
        })
    }


module.exports = Dbserver
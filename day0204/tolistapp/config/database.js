const mongoose = require("mongoose")
require("dotenv").config();

const dbConnection =()=>{
    mongoose.connect(process.env.DATABASE_URL ,{
        useNewurlParser:true,
  useUnifiedTopology:true
    }).then(()=> console.log("connection succesfuly")
    .catch((err)=> console.log("error ocured") )
    )
}

module.exports = dbConnection;

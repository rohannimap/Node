// const mongoose = require("mongoose")
// require("dotenv").config()
// const DBCOnnect = ()=>{
//     mongoose.connect(process.env.DATABASE_URL,{
//         useNewUrlParser:true
//         ,useUnifiedTopology:true
//     })
//     .then(()=>{console.log("Connected succesfuly !")})
//     .catch((err)=>{console.log(err.message);
//     process.exit(1)}
//     )
    
// }
// module.exports = DBCOnnect


const mongoose = require("mongoose");
require("dotenv").config();

const DBCOnnect = () => {
    mongoose.connect(process.env.DATABASE_URL)
    .then(() => {
        console.log("Connected successfully!");
    })
    .catch((err) => {
        console.log(err.message);
        process.exit(1);
    });
};

module.exports = DBCOnnect;

const express = require("express")
const app = express()


require("dotenv").config();
const PORT = process.env.PORT || 3000;
app.use(express.json())


const todoRoutes = require("./routes/Todos")
app.use("/todos/api",todoRoutes);


app.listen(PORT,()=>{
    console.log(`sever start on ${PORT}`);
})

const DBCOnnect = require("./config/database")
DBCOnnect()


// default route
app.get("/",(req,res)=>{
     res.send(`this is the home page`)
})

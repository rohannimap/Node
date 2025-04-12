const express = require('express')
const app = express()
const port = 3000

const logs =require("./middleware/logs")

const notesRoute = require("./routers/notes")
app.use(express.json())
app.use(logs)
app.use("/notes",notesRoute)
app.listen(port,()=>{
    console.log("connection succesfuly");
    
})
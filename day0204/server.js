const express = require("express")
const { default: mongoose } = require("mongoose")
const app = express()
const port = 8080
// const bodyParser = require("body-parser");
// app.use(bodyParser.json())
app.use(express.urlencoded({extended:true})) 
app.use(express.json())


app.listen(port,()=>{
   console.log( `app listen on port ${port}`);
   
})
app.get('/',(req,res)=>{
    res.send("hello world")
})
app.get('/2', (req, res) => {
    console.log(req.headers)
  
  })
  app.post("/new",(req,res)=>{
let {name,lastname} = req.body;
console.log(name,lastname);

    res.send("it is working post")
  })

//some note
// app.get('/', (req, res) => { /* */ })
// app.post('/', (req, res) => { /* */ })
// app.put('/', (req, res) => { /* */ })
// app.delete('/', (req, res) => { /* */ })
// app.patch('/', (req, res) => { /* */ })




mongoose.connect('mongodb://localhost:27017/testDb',{
  useNewurlParser:true,
  useUnifiedTopology:true
}).then(()=>console.log("connection succesful")
).catch((err)=>console.log("recive error")
)
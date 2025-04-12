// const express = require("express");
// const app = express();
// const port = 3000;


// app.use(express.urlencoded({ extended: true }));
// app.use(express.json());
// let posts = [
//     { username: "Rupali", city: "Solapur" },
//     { username: "Ruman", city: "Mumbai" },
//     { username: "Simran", city: "Sangli" }
// ];


// app.get("/posts", (req, res) => {
//     res.json(posts);
// });

// // POST a new post (via Postman x-www-form-urlencoded)
// app.post("/posts", (req, res) => {
//     console.log("Body received:", req.body);

//     const { username, city } = req.body;
//     const newPost = { username, city };
//     posts.push(newPost);

//     // res.status(201).json({ message: "Post added successfully", post: newPost });
// });

// app.get("/", (req, res) => {
//     res.json(posts)
// });

// // Start server
// app.listen(port, () => {
//     console.log(` Server is running on http://localhost:${port}`);
// });


// const express =require("express");
// const app =express();
// let path =require("path")
// let port =3000;
// app.set("view engine","ejs");
// app.set("views",path.join(__dirname,"/views"))
// app.use(express.static(path.join(__dirname, "/public")));
// // app.use(express.urlencoded({ extended: true }));
// app.use(express.json())
// let posts =[
//     {
//         username :"Rupali",
//         city:"Solpaur"
//     },
//     {
//         username :"Ruman",
//         city:"Mumbai"
//     },
//     {
//         username :"Simran",
//         city:"Sangli"
//     }
// ]

// app.get("/",(req,res)=>{
// let {data} =req.query;
// console.log(data);
//     res.send("server is working well!!")
// });
// app.get("/posts",(req,res)=>{
//     let {data} =req.query;
//     console.log(data);
//         res.render("index.ejs",{posts})
//         console.log({posts});
//     });


//     app.post("/posts",(req,res)=>{
//         console.log(req.body);
        
//         const  {username,city}=req.body;
      
//        const data = {username,city}

        
//         posts.push(data)
//         res.json(data)
//         // res.render("index.ejs",{posts.push(username)})
//     })
// app.listen(port,()=>{
//     console.log(`Listenig on port ${port}`);
// })
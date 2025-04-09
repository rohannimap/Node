const Todo = require("../models/Todo")


exports.createTodo = async(req,res)=>{

    // try{
        //extract tile and desc...
            const {title,description}= req.body
        const response = await Todo.create({title,description})
            res.json(response)
    // }
    // catch(err){
    //     console.error(err);
    //     console.log(err);
    //     res.status(500).json(
    //         {
    //             success:false,
    //             data:"error",
    //             message:err.message
    //         }
    //     )
          
    }

    
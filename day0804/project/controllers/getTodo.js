const Todo = require("../models/Todo")

exports.getTodo=async(req,res)=>{
  try{
        //fetch data
        const todos = await Todo.find({})
        res.status(200).json({
            success:true,
            data:todos,
            message:"get susscfuly"
        })
  }
catch(err){
console.error(err);
console.log(err);
res.status(500).json({
    success:false,
            error:err.message,
            message:"server error",
})
}
}


//ny id find
exports.getTodoById=async(req,res)=>{
  try{
       const id = req.params.id;
       const todo = await Todo.findById({_id:id})

       //data not match
       if(!todo){
        res.status(404).json({
            success:false,
            message:"data no found"
        })
       }

       //data found
       res.status(200).json({
        success:true,
        data:todo,
        message:"data founded"
       })
  }
catch(err){
    console.error(err);
    console.log(err);
    res.status(500).json({
        success:false,
                error:err.message,
                message:"server error",
    })
    
}
}
const Todo = require("../models/Todo")

exports.deleteTodo=async(req,res)=>{

       const {id} = req.params
        await Todo.findByIdAndDelete(id)
        res.status(200).json({
            success:true,
            
            message:"get susscfuly"
        })


}

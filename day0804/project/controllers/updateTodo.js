const Todo = require("../models/Todo")

exports.updateTodo = async(req,res)=>{
    const {id} = req.params;
    const {title,description} = req.body;
    const todo = await Todo.findByIdAndUpdate(
        {_id:id},
        {title,description,updatedDate:Date.now()}
    )
    res.status(200).json(
        {
            success:true,
            data:todo,
            message:"update successfuly"
        }
    )
}
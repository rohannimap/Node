const mongoose = require("mongoose")

const postModel =new mongoose.Schema({
            title:{
                type:String,
                reuired:true
            },
            body:{
                type:String,
                requried:true
            },
            likes:[
                {
                    type:mongoose.Schema.Types.ObjectId,
                    ref:"like"
                }
            ],
            Comment:[
                {
                    type:mongoose.Schema.Types.ObjectId,
                    ref:"comment"
                }
            ]
            
})


module.exports = mongoose.model("Post",postModel)
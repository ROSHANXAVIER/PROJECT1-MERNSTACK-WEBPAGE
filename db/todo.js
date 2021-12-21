const mongoose=require('mongoose')

const TodoSchema=new mongoose.Schema({
    name:{type:String},
    age:{type:Number}},
    {collection:'sample'}
)
const model=mongoose.model('TodoModel',TodoSchema)
module.exports=model


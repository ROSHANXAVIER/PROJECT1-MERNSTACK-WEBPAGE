const mongoose=require('mongoose')

const TodoSchema=new mongoose.Schema({
    name:{type:String},
    age:{type:Number},
    username:{type:String},
    password:{type:String}},
    {collection:'sample'}
)
const model=mongoose.model('TodoModel',TodoSchema)
module.exports=model


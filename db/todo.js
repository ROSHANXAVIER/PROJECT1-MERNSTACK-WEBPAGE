const mongoose=require('mongoose')

const TodoSchema=new mongoose.Schema({
    name:{type:String,default:'he'},
    age:{type:String,default:100}},
    {collection:'sample'}
)
const model=mongoose.model('TodoModel',TodoSchema)
module.exports=model


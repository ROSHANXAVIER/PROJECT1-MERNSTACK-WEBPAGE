require('./db/mongoose.js')
const express=require('express')
const { Mongoose }= require('mongoose')
const app=express()
const bodyParser=require('body-parser')
const Todo=require('./todo')
const path=require('path')

const bcrypt=require('bcryptjs')

app.use(bodyParser.json())

app.get('/',async (req,res)=>{
    const data=await Todo.find({name:'rosh'})
    console.log(data)
    res.json(data)
})
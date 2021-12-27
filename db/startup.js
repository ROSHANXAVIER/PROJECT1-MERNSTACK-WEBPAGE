require('../db/mongoose.js')
const express=require('express')
const { Mongoose }= require('mongoose')
const app=express()
const bodyParser=require('body-parser')
const Todo=require('./todo')
const path=require('path')
const cors = require('cors')
app.use(cors())



app.use(bodyParser.json())

app.use('/',express.static(path.join(__dirname,'static')))

console.log(Todo)
app.get('/',async (req,res)=>{
    const data=await Todo.find({name:'rosh'})
    console.log(data)
    dataToSend = data[0];
    res.send(dataToSend)
    console.log(dataToSend)
}) 
 

app.post('/add',async(req,res)=>{
    let user = req.body.userId;
    let title = req.body.title;
    let retur = 'the return data is '+ user + title
    let r=await Todo.find({name:title})
    dat=r[0].age
    s=String(dat)
    console.log(retur)
    console.log(s)
    res.send(s)
})


app.listen(8080,(req,res)=>{
    console.log('server up on port 8080')
})

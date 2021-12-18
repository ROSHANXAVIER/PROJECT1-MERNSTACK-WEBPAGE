require('../db/mongoose.js')
const express=require('express')
const { Mongoose }= require('mongoose')
const app=express()
const bodyParser=require('body-parser')
const Todo=require('./todo')
const path=require('path')
const cors = require('cors');
app.use(cors())

app.use(bodyParser.json())

app.use('/',express.static(path.join(__dirname,'static')))



app.post('/add',async(req,res)=>{
    let user = req.body.userId;
    let title = req.body.title;
    let retur = 'the return data is '+ user + title
    let r='pass :'+title
    console.log(retur)
    console.log(r)
    res.send(r)
})

app.get('/ad',async(req,res)=>{
    retur='hi'
    
    console.log(retur)
})

app.listen(8080,(req,res)=>{
    console.log('server up on port 8080')
})

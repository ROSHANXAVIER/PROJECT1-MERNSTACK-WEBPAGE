require('../db/mongoose.js')
const express=require('express')
const { Mongoose }= require('mongoose')
const app=express()
const bodyParser=require('body-parser')
const Todo=require('./todo')
const path=require('path')
const cors = require('cors')
app.use(cors())
var conn=Mongoose.connection


app.use(bodyParser.json())

app.use('/',express.static(path.join(__dirname,'static')))

console.log(Todo)
app.get('/',async (req,res)=>{
    const data=await Todo.find({name:'rosh'})
    // console.log(data)
    dataToSend = data[0];
    res.send(dataToSend)
    // console.log(dataToSend)
}) 
 

// app.post('/add',async(req,res)=>{
//     let user = req.body.userId;
//     let title = req.body.title;
//     let retur = 'the return data is '+ user + title
//     let r=await Todo.find({name:title})
//     let dat=r[0].age
//     let g=r[0].name
//     s=String(dat)
//     const result=await Todo.create({
//         name:user,
//         age:title
//     })
//     console.log(result)
// })

app.post('/add',async(req,res)=>{
    let user = req.body.userId;
    let title = req.body.title;
    hi()
    async function hi(){
        try{
            let r=await Todo.find({name:title})
            let dat=r[0].age
            s=String(dat)
            res.send(dat)

        }catch(e){
            const result=await Todo.create({
                name:user,
                age:title
            })
            res.send('UNknown name , a name has been created')
        }
    }
})



app.listen(8080,(req,res)=>{
    console.log('server up on port 8080')
})

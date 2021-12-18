const mongoose=require('mongoose')
mongoose.connect('mongodb+srv://roshanxavier24:roshxavier@cluster0.1rjoo.mongodb.net/sample?retryWrites=true&w=majority',{
    useNewUrlParser:true,
    useUnifiedTopology:true
}).then(()=>{
    console.log('connection successful')

}).catch((error)=>{
    console.log('some error',error)
})
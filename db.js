const mongoose= require('mongoose')

module.exports=mongoose.connect('mongodb+srv://Malini:<atlas1>@cluster0.iyixz.mongodb.net/myFirstDatabase?retryWrites=true&w=majority',{
useUnifiedTopology : true,
useNewUrlParser : true,
useFindAndModify : false
},err =>{
    if(err) console.log('Error in DB connection ${err}')
    console.log('MongoDB Connection Succeeded...')
})
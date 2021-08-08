const express = require('express');
const mongoose = require('mongoose');
const app = express();
const User = require('./models/User');


const DB_URL = 'mongodb+srv://abhishek:attainu2021@cluster0.zmld7.mongodb.net/computercart?retryWrites=true&w=majority'

mongoose.connect(DB_URL,{
    useNewUrlParser:true,
    useUnifiedTopology:true,
    useFindAndModify:false,
    useCreateIndex:true
},async(err)=>{
    if(err) throw err
    console.log("connected to database")
    //const instance = new User()
    const newUser = {
        username:"david",
        email:"david@example.com",
        password:"password"

    } 
    const user = new User(newUser)
    const result = await user.save()
    console.log(result)

})


app.get('/home',(req,res)=>{
    res.send("home");
})

app.listen(3000,()=>{
    console.log("server started")

});
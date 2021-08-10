require('dotenv').config();

const express = require('express');
const mongoose = require('mongoose');
const app = express();
const cookieparser = require('cookie-parser')

const userRouter = require('./routers/user')

const productRouter = require('./routers/products')

const {DB_URL} = process.env

mongoose.connect(DB_URL,{
    useNewUrlParser:true,
    useUnifiedTopology:true,
    useFindAndModify:false,
    useCreateIndex:true
},async(err)=>{
    if(err) throw err
    console.log("connected to database")
    //const instance = new User()
    // const newUser = {
    //     username:"david",
    //     email:"david@example.com",
    //     password:"password"


    // } 
    // const user = new User(newUser)
    // const result = await user.save()
    // console.log(result)

})
app.use(cookieparser())
app.use(express.urlencoded({extended:false}))
app.use(express.json())
app.use('/users',userRouter)
app.use('/admin',productRouter)
app.get('/',(req,res)=>{
    res.send("home computerCart");
})

app.listen(3000,()=>{
    console.log("server started")

});
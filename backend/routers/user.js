const express = require('express');
const router = express.Router();
const userModel = require('../models/User');

router.get('/signup',(req, res)=>{
    res.send("signup page")
})

router.post('/signup',async(req, res)=>{
    try {
        const newUser = new userModel(req.body)
        const saveduser = await newUser.save()
        console.log(newUser)
        res.redirect('/')
    }catch (error) {
        console.log(error)
        res.send("error occured")

    }

})

module.exports =router
const express = require('express');
const router = express.Router();
const userModel = require('../models/User');
const bcrypt = require('bcrypt');
const mongoose = require('mongoose');


router.get('/signup',(req, res)=>{
    res.send("signup page")
})

router.post('/signup',async(req, res)=>{
    try {
        //user = req.body
        
       
        const salt = await bcrypt.genSalt(10)

        const hashedPassword = await bcrypt.hash(req.body.password,salt)
        req.body.password = hashedPassword
        console.log(req.body)

        const newUser = new userModel(req.body)
        const saveduser = await newUser.save()
        console.log(saveduser) 
        res.redirect('/')
    }catch (error) {
        console.log(error)
        res.send("error occured")

    }

})


router.get('/login',(req, res)=>{
    res.send("loginPage")
})

router.post('/login',(req, res)=>{
    

})

module.exports =router
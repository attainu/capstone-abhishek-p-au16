const mongoose = require('mongoose')

const UserSchema = new mongoose.Schema({
    username:{
        type: 'string',
        trim: true,
        required: true,
        maxlength:32

    
    },
    email:{
        type: 'string',
        required: true,
        lowercase: true,
        trim: true,
        unique: true,
    },
    password:{
        type: 'string',
        required: true,
    },
    role:{type:"string",
          default:'user'}
})

const User =  mongoose.model('users',UserSchema)

module.exports = User
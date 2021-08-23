const mongoose = require('mongoose')

const AdminSchema = new mongoose.Schema({
    name:{
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
          default:'admin'}
})

const Admin =  mongoose.model('admin',AdminSchema)

module.exports =Admin
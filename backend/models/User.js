const mongoose = require('mongoose')

const userSchema = mongoose.Schema({
    name: {
        type:String,
        required: true,
        max: 255
    },

    username: {
        type: String, 
        required: true,
        max: 255
    },

    password: {
        type: String, 
        required: true,
        max: 1024
    },

    email: {
        type: String, 
        required: true,
        min: 6
    }
})

module.exports = mongoose.model('User', userSchema);
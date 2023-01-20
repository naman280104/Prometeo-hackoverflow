const mongoose = require('mongoose')

const userSchema = mongoose.Schema({
    name: String,
    username: String,
    password: String,
    email: {
        type: String, 
        required: true,
    }
})

module.exports = mongoose.model('User', userSchema);
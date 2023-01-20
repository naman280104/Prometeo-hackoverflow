const express = require('express');
const app = express();
const mongoose = require('mongoose');
const PORT = process.env.PORT || 8000;
require('dotenv/config');


// connecting with the database
const uri = process.env.DB_CONNECTION
const connect = async() =>{
    try {
        await mongoose.connect(uri)
        console.log("DB connected")
    } catch (err) {
        console.log(err);
    }
}

connect();

app.listen(PORT, () => console.log("THE SERVER IS LISTENING"))
const express = require('express');
const app = express();
const mongoose = require('mongoose');
const PORT = process.env.PORT || 8000;
require('dotenv/require');

const connect = async() =>{
    await mongoose.connect()
}

app.listen(PORT, () => console.log("THE SERVER IS LISTENING"))
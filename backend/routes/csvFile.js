const upload = requrie('express-fileupload')
const express = require('express')
const app = express();
const router = require('express').Router()

// using the upload function for all the following routes
app.use(upload)

router.post('/upload', (req, res) => {
    if (req.files) {
        console.log(req.files);
    }
})


const express = require('express');
const router = express.Router();
const mongoose = require('mongoose');

mongoose.connect("mongodb://127.0.0.1:27017");

router.get('/',(req,res)=>{
    res.send('Welcome');
})

router.post('/',(req,res)=>{
    console.log(req.body)
    res.send(req.body);
})

module.exports = router;
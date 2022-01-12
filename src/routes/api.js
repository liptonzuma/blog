const express = require('express');
const router = express.Router();
const mongoose = require('mongoose');

router.get('/',(req,res)=>{
    res.send('Welcome');
})

exports = router;
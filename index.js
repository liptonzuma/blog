const express = require('express');
const app = express();
const dotenv = require('dotenv');
dotenv.config();
const cors = require('cors')


const mongoose = require('mongoose')

mongoose.connect('mongodb://127.0.0.1:27017/blog');
mongoose.Promise = global.Promise;


const api = require('./src/routes/api');

const port = process.env.PORT || 8000;



app.use(express.json());


app.use('/api',cors(),api);

app.get('/',cors(),(req,res)=>{
    res.send('hello')
});

app.listen(port,()=>{
    console.log(`Running on port ${port}`);
});
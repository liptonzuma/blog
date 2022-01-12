const express = require('express');
const app = express();
const dotenv = require('dotenv');
dotenv.config();


const api = require('./src/routes/api');

const port = process.env.PORT || 8000;

app.use(express.json());


app.use('/api',api);

app.get('/',(req,res)=>{
    res.send('<h1>Welcome</h1>')
});

app.listen(port,()=>{
    console.log(`Running on port ${port}`);
});
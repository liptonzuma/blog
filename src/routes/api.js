const express = require('express');
const router = express.Router();
const bcrypt = require('bcrypt')

const users = require('../schemas/user');

router.get('/',(req,res)=>{
    res.send('Welcome');
})

router.post('/',(req,res)=>{
    const {name,email,password}= req.body;
    bcrypt.hash(password,10)
    .then(result=>{
        users.create(
            {name,email,password:result}
        )
        .then(user=>{
            res.send(user);
        })

    })
})
 
router.put('/:id',(req,res)=>{
    const {id} = req.params;
    users.findByIdAndUpdate(id,req.body)
    .then(()=> {
        users.findById(id)
        .then(data=>res.send(data));
    });
})

module.exports = router;
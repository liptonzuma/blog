const express = require('express');
const router = express.Router();
const users = require('../schemas/user');

router.get('/',(req,res)=>{
    res.send('Welcome');
})

router.post('/',(req,res)=>{
    users.create(req.body)
    .then(data=>res.send(data))
    .catch(err=>res.send(err.message));
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
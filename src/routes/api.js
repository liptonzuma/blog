const express = require('express');
const router = express.Router();
const user = require('../schemas/user');

router.get('/',(req,res)=>{
    res.send('Welcome');
})

router.post('/',(req,res)=>{
    user.create(req.body)
    .then(data=>res.send(data))
    .catch(err=>res.send(err.message));
})
 
router.put('/:id',(req,res)=>{
    const {id} = req.params;
    user.findByIdAndUpdate(id,req.body)
    .then(()=> {
        user.findById(id)
        .then(data=>res.send(data));
    });
})

module.exports = router;
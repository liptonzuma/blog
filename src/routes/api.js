const express = require('express');
const router = express.Router();
const bcrypt = require('bcrypt')

const users = require('../schemas/user');

router.get('/',(req,res)=>{
    res.send('Welcome');
})

router.post('/register',async(req,res)=>{

    const {name,email,password}= req.body;

    const isAvailable = await users.findOne({email});
    
    if(isAvailable !==null){
        res.send('This email already exist\nlogin instead');
        return;
    }
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

router.post('/login',(req,res)=>{
    const {email,password} = req.body;
    users.findOne({email})
    .then(async(user)=>{
        const result = await bcrypt.compare(password,user.password);
        if(result){
            res.send(`Welcome ${user.name}`);
            return;
        }
        res.send('wrong Password')
        
    })
    .catch(err=>res.send(err.message))
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
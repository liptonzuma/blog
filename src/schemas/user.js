const mongoose = require('mongoose');
const schema = mongoose.Schema;

const user = new schema({
    name:{
        type:String,
        required:[true,'name is required']
    },
    email:{
        type:String,
        required:[true,'email is required']
    }
})

const User = mongoose.model('user',user);
module.exports = User;
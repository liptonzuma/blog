const jwt = require('jsonwebtoken');
const env = process.env

const verifyToken =(req,res,next)=>{

    const token = req.body.token;

    if(!token){
        res.status(404).send('Token not found');
        return;
    }
    try {

        const data = jwt.verify(token,env.TOKEN_KEY);
        req.user = data;
        
    } catch (error) {
        res.status(401).send("Invalid Token");
    }
    return next();

}
module.exports = verifyToken;
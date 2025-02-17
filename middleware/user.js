const jwt = require('jsonwebtoken');
require('dotenv').config();
function userMiddleware(req, res,next){
    const token = req.headers.token;
    try{
        const decoded = jwt.verify(token , process.env.JWT_USER_SECRET);
        console.log(decoded);
        req.userId = decoded.id;
        next();
    } 
    catch(e){
        res.status(401).send("Couldn't verify token  , Please sign-in again ");
    }
}


module.exports = {
    userMiddleware : userMiddleware
}
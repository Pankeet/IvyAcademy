const jwt = require('jsonwebtoken');
require('dotenv').config();
function userMiddleware(req, res,next){
    const token = req.headers.token;
    try{
    const decoded = jwt.verify(token , process.env.JWT_USER_SECRET);

    if(decoded){
        req.userId = decoded.Id;
        next();
    }
    else{
        return res.status(403).json({
            message : "You are not signed IN"
        })
    } 
    }
    catch(e){
        res.status(401).send("Couldn't verify token");
    }
}


module.exports = {
    userMiddleware : userMiddleware
}
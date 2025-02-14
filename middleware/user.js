const jwt = require('jsonwebtoken');
require('dotenv').config();
function usermiddleware(req, res,next){
    const token = req.headers.token;
    const decoded = jwt.verify(token , process.env.JWT_USER_SECRET);

    if(decoded){
        req.userId = decoded.Id;
        next();
    }
    else{
        res.status(403).json({
            message : "You are not signed IN"
        })
    } 
}

module.exports = {
    usermiddleware 
}
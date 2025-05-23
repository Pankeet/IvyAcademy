const jwt = require('jsonwebtoken');
require('dotenv').config();
function adminMiddleware(req, res,next){
    const token = req.headers.token;
    const decoded = jwt.verify(token , process.env.JWT_ADMIN_SECRET);

    if(decoded){
        req.adminId = decoded.id;
        next();
    }
    else{
        res.status(403).json({
            message : "You are not signed IN"
        })
    } 
}

module.exports = {
    adminMiddleware : adminMiddleware
}
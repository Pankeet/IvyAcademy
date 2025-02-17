const { z } = require('zod');
const userSchema = z.object({
        email : z.string().email(),
        password : z.string() ,
        Fullname : z.string(),
        phoneNum : z.number()
});

function validateUsingZod(req, res , next){

    try{
        const Validate = userSchema.parse({
            email : req.body.email ,
            password : req.body.password ,
            Fullname : req.body.Fullname,
            phoneNum : req.body.phoneNum
        });

        if(validateUsingZod){
            next();
        }
    }

    catch(e){
        return res.status(401).json({
            error : "Cannot Parse Data"
        })
}
}
module.exports = {
    validateUsingZod : validateUsingZod
}

const { z } = require('zod');
const userSchema = z.object({
        firstname : z.string(),
        lastname : z.string(),
        email : z.string() ,
        password : z.string()
});

function validateUsingZod(req, res , next){
    const { firstname , lastname , email, password } = req.body;
    try{
        const Validate = userSchema.parse({
            firstname , lastname , email, password
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

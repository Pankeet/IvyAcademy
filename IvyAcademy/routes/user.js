const { Router } = require('express');
const userRouter = Router()

    userRouter.post('/signup', async function(req, res){

    });

    //Signin
    userRouter.post('/signin',async function(req, res){

    });

    //Purchases
    userRouter.get('/purchases' , function(req, res){
    res.json({
        message : "All courses are mentioned here"
    });
    });

module.exports = {
    userRouter : userRouter  
}

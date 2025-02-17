const { Router } = require('express');
const bcrypt = require('bcrypt');
const { UserModel, PurchaseModel , CourseModel } = require('../config/db');
const { userMiddleware } = require('../middleware/user');
const { validateUsingZod } = require('../middleware/validation');
const jwt = require('jsonwebtoken');
const userRouter = Router()
require('dotenv').config();

// SignUp Endpoint ( DONE ✔️ )
    userRouter.post('/signup', validateUsingZod , async function(req, res){
        const { email, password, Fullname , phoneNum } = req.body;
        const hp_user = await bcrypt.hash(password , 10);

        try{
        await UserModel.create({
            email,
            password : hp_user ,
            Fullname,
            phoneNum,
        })
    }
    catch(e){
        return res.status(403).send("Creating user failed! ");
    }

    res.json({
        message : "Signup Successful"
    })
    });

    //Signin Endpoint ( DONE ✔️)
    userRouter.post('/signin', async function(req, res){
        const { email , password } = req.body;

        try{
        const user = await UserModel.findOne({email : email});
        
        if(!user){
            res.status(403).json({
                message : "Invalid User, Please 🙏 SignUp First ! "
            })
        }

        else{
        const isMatch = await bcrypt.compare( password , user.password );
        // User is validated so using JWT to authenticate
        if(isMatch){
            const token = jwt.sign({
                id : user._id
            },process.env.JWT_USER_SECRET);

            res.status(200).json({
                token : token ,
                message : "SignIn Successful"
            })

        }
        else{
            res.status(403).json({
                message : "Invalid Credentials"
            })
        }
            }
        }

        catch(e){
            res.status(503).send("Server Error");
        }
        
    });

    //Purchases
    userRouter.get('/purchases' , userMiddleware , async function(req, res){
        const userId = req.userId;

        const purchases = await PurchaseModel.find({
            userId
        })

        const courseData = await CourseModel.find({
            _id : {$in :purchases.map(x=>x.courseId)}
        })
        return res.json({
            purchases,
            courseData
        }) 
    });

module.exports = {
    userRouter : userRouter  
}

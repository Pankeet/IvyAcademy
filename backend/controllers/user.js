const { Router } = require('express');
const bcrypt = require('bcrypt');
const { UserModel, PurchaseModel , CourseModel } = require('../model/user');
const { userMiddleware } = require('../middlewares/user');
const { validateUsingZod } = require('../middlewares/validation');
const jwt = require('jsonwebtoken');
const { message } = require('statuses');
const userRouter = Router()
require('dotenv').config();

// SignUp Endpoint ( DONE ✔️ )
    userRouter.post('/signup', async function(req, res){
        const { firstname , lastname , email, password } = req.body;
        console.log(req.body);
        const hp_user = await bcrypt.hash(password , 10);

    try{
        const findUser = await UserModel.findOne({email});
        if(!findUser){
            await UserModel.create({
                firstname ,
                lastname , 
                email ,
                password : hp_user ,
            })

            return res.status(200).json({
                    message : "Signup Successful"
                })
        }
        else{
            return res.status(409).json({
                message : "User Already Exists"
            })
        }
    }
    catch(e){
        return res.status(403).send("Oops! Creating new user failed!");
    }

    });

    //Signin Endpoint ( DONE ✔️)
    userRouter.post('/signin', async function(req, res){
        const { email , password } = req.body;

        try{
            const user = await UserModel.findOne({email : email});
            if(!user){
                return res.status(401).json({
                    message : "Invalid User, Please 🙏 SignUp First ! "
                })
            }
            else{
            const isMatch = await bcrypt.compare( password , user.password );

            // User is validated so using JWT to authenticate
            if(isMatch){
                const token = jwt.sign({
                    id : user._id, 
                    email : user.email,
                },process.env.JWT_USER_SECRET);

                return res.status(200).json({
                    token : token ,
                    message : "SignIn Successful"
                })
            }
            else{
                return res.status(403).json({
                    message : "Invalid Credentials"
                })
            }
        }}

        catch(e){
            res.status(503).json({message : "Server Error"});
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

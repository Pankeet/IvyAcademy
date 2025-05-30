const { Router } = require('express');
const adminRouter = Router();
const { AdminModel  ,  CourseModel} = require('../model/user');
const { adminMiddleware } = require('../middlewares/admin');
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');
require('dotenv').config();

// Admin Signup 
adminRouter.post('/signup' , async function(req,res){
    const { fullname , email , password , phoneNum , Address } = req.body;

    const hp_admin = await bcrypt.hash(password , 10);

    try{
    await AdminModel.create({
        fullname,
        email,
        password : hp_admin ,
        phoneNum,
        Address
    })
    }
    catch(e){
    return res.status(503).send("Creating user failed! ");
    }

    res.json({
        message : "Signup Successful"
    })
});

//Admin Signin 
adminRouter.post('/signin', async function(req,res){
    const { email , password } = req.body;

        try{
        const admin = await AdminModel.findOne({email : email});
        
        if(!admin){
            res.status(403).json({
                message : "Invalid User, Please SignUp First"
            })
        }

        else{
        const isMatch = await bcrypt.compare( password , admin.password );
        // Admin is validated so using JWT to authenticate
        if(isMatch){
            const token = jwt.sign({
                id : admin._id
            },process.env.JWT_ADMIN_SECRET);

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
            res.status(501).send("Server Error");
        }
        
    });

// Admin Rights 
adminRouter.post('/create/course', adminMiddleware , async function(req,res){
    const adminId = req.adminId;

    const { title , description , imageURL , price } = req.body;
    try{
    const course = await CourseModel.create({
        title ,
        description,
        imageURL,
        price,
        creatorId : adminId
    });

    res.status(200).json({
        message : "Course Created Successfully ❄️",
        course_Id : course._id
    })
    }
    catch(e){
        return res.status(503).json({
            message : "Course cannot be created ! 🥺"
        })
    }
});

//To update course created by that Admin only
adminRouter.put('/course', adminMiddleware ,async function(req,res){
    const adminId = req.adminId;
    const {title , description , imageURL , price , courseId} = req.body;

    const update = await CourseModel.updateOne({
        _id : courseId,
    creatorId : adminId
},{ 
    title ,
    description,
    imageURL,
    price,
    })

    return res.json({
        message : "Course Updated Successfully ",
        course_Id : courseId
    })

});

// Admin 's courses (Update 1.1)
adminRouter.get('/mycourses', adminMiddleware , async function(req,res){
    const adminId = req.adminId;
    try{
    const mycourses = await CourseModel.find({
        creatorId : adminId
    })
        res.json({
            mycourses
        });
    }
catch(e){
    res.status(501).json({
        error : "Could not find User"
    })
}
});

module.exports = {
    adminRouter : adminRouter
}


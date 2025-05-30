const { Router } = require('express');
const { userMiddleware } = require('../middlewares/user');
const { PurchaseModel , CourseModel } = require('../model/user');
const courseRouter = Router();

// TO get all courses to the user ( without auth )
    courseRouter.get('/all' ,  async function(req, res){
        const courses = await CourseModel.find({});
        return res.json({
            courses
        })
    });

// if the logged in user wants to purchase a course
    courseRouter.post('/getCourse', userMiddleware , async function(req, res){
         const userId = req.userId;
         const courseId = req.body.courseId;
    try{
         await PurchaseModel.create(
            {
               userId : userId,
               courseId : courseId
            }
         )
         res.json({
            message : "Course Purchased Successfully "
         })
    }
    catch(e){
            res.status(501).json({
                error : "OOPS ! Something went wrong "
            })
    }
    });

module.exports = {
    courseRouter : courseRouter 
};
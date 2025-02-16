const { Router } = require('express');
const { userMiddleware } = require('../middleware/user');
const { PurchaseModel } = require('../config/db');
const { CourseModel } = require('../config/db');
const courseRouter = Router();

    courseRouter.get('/all' ,  async function(req, res){
        const courses = await CourseModel.find({});
        return res.json({
            courses
        })
    });

    courseRouter.post('/getCourse', userMiddleware , async function(req, res){
         const userId = req.userId;
         const courseId = req.body.courseId;

         await PurchaseModel.create(
            {
               userId : userId,
               courseId : courseId
            }
         )
         res.json({
            message : "Course Purchased Successfully "
         })
    });

module.exports = {
    courseRouter : courseRouter 
};
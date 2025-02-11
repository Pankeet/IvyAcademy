const { Router } = require('express');
const courseRouter = Router();

    courseRouter.get('/all' ,  function(req, res){
        res.json({
            message : "All Courses are available"
        })
    });

    courseRouter.post('/getCourse',  function(req, res){
        res.json({
            message : "Purchase courses"
        })
    });

module.exports = {
    courseRouter : courseRouter 
};
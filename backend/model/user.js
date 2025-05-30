const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const ObjectId = mongoose.Types.ObjectId;
require('dotenv').config();

mongoose.connect(process.env.MONGO_URL);

// User Schema
const users = new Schema({
    firstname : String , 
    lastname : String , 
    email : {type: String, unique : true} , 
    password : {type : String},

});

// Admin Schema
const admins = new Schema({
    fullname : String, 
    email : {type: String, unique : true} , 
    password : {type : String },
    phoneNum : Number,
    Address : String,
});

// Courses
const courses = new Schema({ 
    title : String, 
    description : String,
    imageURL : String,
    price : Number,
    creatorId : ObjectId ,
}); 

// Users Purchases
const purchases = new Schema({
    userId : ObjectId,
    courseId : ObjectId
});

// Creating all the models 
const UserModel = mongoose.model("users", users);
const AdminModel = mongoose.model("admins", admins);
const PurchaseModel = mongoose.model("purchases", purchases);
const CourseModel = mongoose.model("courses", courses);

// Exporting the created Models
module.exports = {
     UserModel,
     AdminModel ,
     PurchaseModel,
     CourseModel 

}
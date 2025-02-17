const express = require('express');
const mongoose = require('mongoose');
const app = express();
require('dotenv').config();
const { userRouter } = require('./routes/user');
const { courseRouter } = require('./routes/courses');
const { adminRouter } = require('./routes/admin');

app.use(express.json());

app.use('/user', userRouter);
app.use('/course', courseRouter);
app.use('/admin', adminRouter);

async function main(){
    await mongoose.connect(process.env.MONGO_URL);  
    app.listen(3001); 
    console.log("Listening to MongoDb"); 
}
 main();

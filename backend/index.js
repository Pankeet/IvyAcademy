const express = require('express');
const app = express();
require('dotenv').config();
const { connectDB } = require('./config/db');
const { userRouter } = require('./routes/user');
const { courseRouter } = require('./routes/courses');
const { adminRouter } = require('./routes/admin');

app.use(express.json());

app.use('/user', userRouter);
app.use('/course', courseRouter);
app.use('/admin', adminRouter);

connectDB();
app.listen(3001); 

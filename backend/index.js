const express = require('express');
const app = express();
const cors = require('cors');
require('dotenv').config();
const connectDb  = require('./config/db');
const { userRouter } = require('./controllers/user');
const { courseRouter } = require('./controllers/courses');
const { adminRouter } = require('./controllers/admin');

app.use(express.json());
app.use(cors());
app.use('/user', userRouter);
app.use('/course', courseRouter);
app.use('/admin', adminRouter);
 
async function startServer() {
    try {
        await connectDb(); 
        app.listen(3001, () => {
            console.log('Server is running on port 3001');
        });
    } catch (error) {
        console.error('Failed to connect to MongoDB:', error.message);
        process.exit(1); 
    }
}

startServer();
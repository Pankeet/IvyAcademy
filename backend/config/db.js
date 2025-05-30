const mongoose = require('mongoose');
require('dotenv').config();
const connectDb = async () => {
    try{
        await mongoose.connect(process.env.MONGO_URL); 
        console.log("Listening to MongoDb"); 
    }
    catch(err){
        console.error(`Error : ${err.message}`);
    } 
}

module.exports = connectDb;
const mongoose = require('mongoose');
require('dotenv').config({path:"./src/Config/.env"});

const connectDB = async(url)=>{
    try {
        await mongoose.connect(url);
        console.log('MongoDB connected...');
    } catch (error) {
        console.error(error);
    }
}

module.exports = connectDB;
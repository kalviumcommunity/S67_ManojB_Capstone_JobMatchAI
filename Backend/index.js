const express = require('express');
const cors = require('cors');
const path = require('path');
require('dotenv').config({path: './src/Config/.env'});

const db = require('./src/Database/db');
const userRouter = require('./src/Controllers/user')

const app = express();
const port = process.env.PORT || 3000;
const url = process.env.MONGO_URI;

app.use(express.json());
app.use(cors());

app.use('/auth',userRouter);
app.listen(port,async ()=>{
    console.log(`Server is running on port ${port}`);
    try{
        await db(url);
        console.log('Connected to MongoDB');
    }
    catch(error){
        console.error('Error connecting to MongoDB:', error.message);
    }
})
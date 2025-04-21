const mongoose = require('mongoose'); 

const userSchema = new mongoose.Schema({
    name:{
        type: String,
        required: [true, "Please enter your name!"],
      },
      email:{
        type: String,
        required: [true, "Please enter your email!"],
      },
      password:{
        type: String,
        required: [true, "Please enter your password"],
        minLength: [4, "Password should be greater than 4 characters"]
        
      },
     resetPasswordToken: String,
     resetPasswordTime: Date,

});

const userModel= mongoose.model('User',userSchema);

module.exports = userModel;
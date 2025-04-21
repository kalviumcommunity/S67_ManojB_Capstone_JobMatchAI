const {Router} = require('express');

const userRouter = Router();
userRouter.get("/get-user", async(req,res)=>{
    const user = req.user;
    if(!user){
        return res.status(404).json({message: "User not found"});
    }
    return res.status(200).json({user:user});
});

module.exports = userRouter;
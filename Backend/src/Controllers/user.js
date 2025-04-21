const {Router} = require('express');
const bcrypt = require("bcrypt");

const userRouter = Router();
userRouter.get("/get-user", async(req,res)=>{
    const user = req.user;
    if(!user){
        return res.status(404).json({message: "User not found"});
    }
    return res.status(200).json({user:user});
});

userRouter.post("/-usercreate",upload.single("avatar"), async(req,res,next)=>{
    const {name, email, password} = req.body;
    const userEmail = await userModel.findOne({email:email});
    if (userEmail) {
        return res.status(400).json({error: "User already exists"});
      }
      if (!req.file) {
        return res.status(400).json({ error: "Avatar upload failed" });
      }
      
    const filename = req.file.filename ;
    const fileUrl = `/uploads/${filename}`;
    bcrypt.hash(password, 10, async (err, hash)=>{
        await userModel.create({
                name:name,
                email:email,
                password:hash,
                avatar: {
                    url:fileUrl,
                    public_id:filename
                },
            
        })
        return res.status(200).json({message: "User created"});
    })

});

module.exports = userRouter;
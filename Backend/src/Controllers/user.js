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

userRouter.post("/create-user",upload.single("avatar"), async(req,res,next)=>{
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

userRouter.put("/update-user/:id", upload.single("avatar"), async (req, res) => {
    try {
        const { id } = req.params;
        const { name, email } = req.body;

        const user = await userModel.findById(id);
        if (!user) {
            return res.status(404).json({ error: "User not found" });
        }

        user.name = name || user.name;
        user.email = email || user.email;

        if (req.file) {
            const filename = req.file.filename;
            const fileUrl = `/uploads/${filename}`;

            user.avatar = {
                url: fileUrl,
                public_id: filename
            };
        }

        const updatedUser = await user.save();

        return res.status(200).json({ message: "User updated", user: updatedUser });
    } catch (err) {
        console.error("Update error:", err);
        return res.status(500).json({ error: "Server error" });
    }
});

module.exports = userRouter;
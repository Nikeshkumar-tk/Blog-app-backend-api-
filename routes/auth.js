const router=require("express").Router();
const user=require("../models/user")
const bcrypt=require("bcrypt")

router.post("/register",async(req,res)=>{
try{
    const salt=await bcrypt.genSalt(10)
    const hashPass=await bcrypt.hash(req.body.password,salt)

    const newUser=new user({
        username:req.body.username,
        email:req.body.email,
        password:hashPass
    })
    const User=await newUser.save()
    res.status(200).json(User)
    
}catch(err){console.log(err)
    res.status(404).json(err)

}
})
router.post("/login",async(req,res)=>{
    try{
        const User=await user.findOne({username:req.body.username})
        !User&&res.status(400).json("Wrong")
        const validate=await bcrypt.compare(req.body.password,User.password)
        !validate&&res.status(400).json("Wrong")
        res.status(200).json(User)

    }catch{

    }
})
module.exports=router
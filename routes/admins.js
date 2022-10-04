const Admin=require('../models/admin')
const router=require("express").Router()
const bcrypt = require('bcrypt')



router.post("/register",async(req,res)=>{
    try{

        const salt=await bcrypt.genSalt(10)
        const hashPass=await bcrypt.hash(req.body.password,salt)
        const newAdmin=new Admin({
            username:req.body.username,
            password:hashPass
        })
        const admin=await newAdmin.save()
        res.status(200).json(admin)
    }catch(err){
        console.log(err)
    }

})
router.post("/login",async(req,res)=>{
    try{
        const User=await Admin.findOne({username:req.body.username})
        !User&&res.status(400).json("Wrong")
        const validate=await bcrypt.compare(req.body.password,User.password)
        !validate&&res.status(400).json("Wrong")
        res.status(200).json(User)

    }catch{

    }
})
module.exports = router


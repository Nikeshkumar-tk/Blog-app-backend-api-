const router=require("express").Router()
const User=require("../models/user")
const bcrypt=require("bcrypt")
const post = require("../models/post")

router.put("/:id",async(req,res)=>{
    if(req.body.userId===req.params.id){
        if(req.body.password)
        {
            const salt=await bcrypt.genSalt(10)
            req.body.password=await bcrypt.hash(req.body.password,salt)
        }
        try{
            const updatedUser=await User.findByIdAndUpdate(req.params.id,{
                $set:req.body,
            },{new:true})
            res.status(200).json(updatedUser)

        }catch(err){console.log(err);
            res.status(500).json(err)

        }
    }
    else{
        res.status(500).json("you cannot update yourv account")
    }
})
router.delete("/:id",async(req,res)=>{
    if(req.body.userId===req.params.id){
        try{
       const user=await User.findById(req.params.id)

        try{
            await post.deleteMany({username:user.username})
           await User.findByIdAndDelete(req.params.id)
            res.status(200).json("user is deleted")

        }catch(err){console.log(err);
            res.status(500).json(err)

        }
    }catch{
        res.status(500).json("user not found")
    }
    }
    else{
        res.status(500).json("you cannot update yourv account")
    }
})
router.get("/:id",async(req,res)=>{
    try{
        const user=await User.findById(req.params.id)
        const{password,...others}=user._doc
        res.status(200).json(others)

    }catch(err){
        res.status(500).json(err)
    }

})
router.get("/admin/all",async(req,res)=>{
try{
    const users=await User.find()
    res.status(200).json(users)
    console.log(users)

}catch(err){

    console.log(err)
    res.status(400)
}

})
module.exports=router
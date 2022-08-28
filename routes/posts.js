const router=require("express").Router()
const User=require("../models/user")

const post = require("../models/post")

router.post("/",async(req,res)=>{
    const newPost=new post(req.body)
    try{

        const savedPost=await newPost.save()
        res.status(200).json(savedPost)
    }catch(err){
        res.status(500).json(err)
    }
   
})
router.put("/:id",async(req,res)=>{
   try{
    const Post=await post.findById(req.params.id)
    if(Post.username===req.body.username)
    {
    try{
        const updatedPost=await post.findByIdAndUpdate(req.params.id,{
            $set:req.body
        },{new:true})
        res.status(200).json(updatedPost)

    }catch{
    res.status()
}
    }
    else{
        res.status(401).json("you can update only your posts")
    }

   }catch(err){
res.status(401).json(err)
   }
})
router.delete("/:id",async(req,res)=>{
    try{
     const Post=await post.findById(req.params.id)
     if(Post.username===req.body.username)
     {
     try{
        await Post.delete()
         res.status(200).json("Your post is deleted")
 
     }catch(err){
     res.status(500).json(err)
 }
     }
     else{
         res.status(401).json("you can delete only your posts")
     }
 
    }catch(err){
 res.status(401).json(err)
    }
 })
router.get("/:id",async(req,res)=>{
    try{
        const Post=await post.findById(req.params.id)
       
        res.status(200).json(Post)

    }catch(err){
        res.status(500).json(err)
    }

})
// Fetching posts by id
router.get("/ ",async(req,res)=>{
    try{
        const Post=await post.findById(req.params.id)
       
        res.status(200).json(Post)

    }catch(err){
        res.status(500).json(err)
    }

})
// Updating username of posts after updating the user
router.put("/",async(req,res)=>{
    const newUsername=req.body.newUsername
    const oldUsername=req.body.oldUsername
    try{

        let posts=await post.updateMany({username:oldUsername}, 
            {"$set":{"username": newUsername}})
            res.status(200).json(posts)
    }catch(err){
res.status(500).json(err)
    }
    })
    // router.get("/:key",(req,res)=>{

    // })


//fetching posts by categories,username and fetching all posts to the homepage

router.get("/",async(req,res)=>{
    const username=req.query.user
    const categories=req.query.cat
    try{
        let posts;
         if(username){
            posts=await post.find({username})
          if(posts.length===0){
            posts=await post.find({"categories":categories})
            res.status(200).json(posts)
          }
          else{
            res.status(200).json(posts)
          }}
          else{
            posts=await post.find()
            res.status(200).json(posts)
          }
           
        // }
        //  if(categories){
        //     posts=await post.find({"categories":categories})
        //     if(posts.length==0)
        //         console.log("nothing")
        // // }else{
        // //     posts=await post.find()
        // // }
       
        //   } 
       

    }catch(err){
        res.status(500).json(err)

    }
})
module.exports=router
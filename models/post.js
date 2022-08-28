const mongoose=require("mongoose")

const postSchema=new mongoose.Schema({
   title:{
    type:String,
    required:true,
    unique:true
   },
   photo:{
    type:String,
    required:false,
   
   },
  
   desc:{
    type:String,
    required:true,
    
   },
   username:{
      type:String,
      required:true,
      unique:false
   },
   categories:{
    type:String,
    required:false
   }
},
{timestamps:true}
);
module.exports=mongoose.model("post",postSchema);
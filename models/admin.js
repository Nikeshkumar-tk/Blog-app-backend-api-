const moongoose=require("mongoose")

const adminSchema=new moongoose.Schema({
    username:{
        type:String,
        required:true
    },
    password:{
        type:String,
        required:true
    }
})
 
module.exports=moongoose.model("admin",adminSchema)
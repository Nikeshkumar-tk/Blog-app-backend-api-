const express=require("express")
const app=express()
const dotenv=require("dotenv")
const mongoose=require("mongoose")
const authRoute=require("./routes/auth")
const userRoute=require("./routes/users")
const postRoute=require("./routes/posts")
const catRoute=require("./routes/categories")
const multer=require("multer")
const path = require("path");
const cors=require("cors")
const adminRoute=require("./routes/admins")

dotenv.config()
app.use(cors())
app.use(express.json())
app.use("/images", express.static(path.join(__dirname, "/images")));

mongoose.connect(process.env.MONGO_URL,{
    useNewUrlParser: true,
    useUnifiedTopology: true,
       }).then(console.log("DATABASE CONECTED")).catch((err)=>console.log(err))

       const storage = multer.diskStorage({
        destination: (req, file, cb) => {
          cb(null, "images");
        },
        filename: (req, file, cb) => {
          cb(null, req.body.name);
        },
      });
      
      const upload = multer({ storage: storage });
      app.post("/api/upload", upload.single("file"), (req, res) => {
        res.status(200).json("File has been uploaded");
      });
app.get("/",(req,res)=>{
    res.send("hello")
})
app.use("/api/auth",authRoute)
app.use("/api/users",userRoute)
app.use("/api/posts",postRoute)
app.use("/api/categories",catRoute)
app.use("/api/admin",adminRoute)
const port=process.env.PROCESS||5000

app.listen(port,()=>console.log("server started"))
const express=require("express")
const app=express()
const dotenv=require("dotenv")
const mongoose=require("mongoose")
const authRoute=require("./routes/auth")
const userRoute=require("./routes/users")
const postRoute=require("./routes/posts")
const catRoute=require("./routes/categories")
// const multer=require("multer")
// const addImage=require("./routes/Firebase.js").default
dotenv.config()
app.use(express.json())
mongoose.connect(process.env.MONGO_URL,{
    useNewUrlParser: true,
    useUnifiedTopology: true,
       }).then(console.log("DATABASE CONECTED")).catch((err)=>console.log(err))

//        const storage = multer.memoryStorage();
// const upload = multer({ storage: storage }).single('file');
// app.post('/upload', upload, addImage);

app.use("/api/auth",authRoute)
app.use("/api/users",userRoute)
app.use("/api/posts",postRoute)
app.use("/api/categories",catRoute)

app.listen(process.env.PORT||5000,()=>console.log("server started"))
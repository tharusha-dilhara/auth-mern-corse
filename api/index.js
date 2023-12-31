import express from "express";
import mongoose from "mongoose";
import dotenv from "dotenv";
import userrouter from "./routes/user.routes.js";
import authrouter from "./routes/auth.routes.js";
import cors   from "cors"

//configiration
dotenv.config();
const app=express();
app.use(express.json());


var whitelist = ['http://localhost:3000','http://localhost:5000']
var corsOptions = {
  origin: function (origin, callback) {
    if (whitelist.indexOf(origin) !== -1) {
      callback(null, true)
    } else {
      callback(new Error('Not allowed by CORS'))
    }
  }
}

// Then pass them to cors:
app.use(cors(corsOptions));


//db connection
mongoose.connect('mongodb+srv://tdjayadeera:bfuqxWGINWs6nU0j@main.lvbwycu.mongodb.net/', {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
.then(()=>{
    console.log("connect to db");
})
.catch((error)=>{
    console.log(`error : ${error}`);
})

//midleware 
app.use('/api/user',userrouter);
app.use('/api/auth',authrouter);
app.use((err,req,res,next) => {
    const statusCode = err.statusCode || 500;
    const message=err.message || 'Inteal server error';
    return res.status(statusCode).json({
        success:false,
        message,
        statusCode
    })
})


app.listen(5000,()=>{
    console.log("server is running port 5000");
})


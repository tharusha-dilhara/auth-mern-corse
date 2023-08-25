import User from "../models/user.model.js";
import bcrypt from "bcryptjs";
import { errorHandler } from "../utils/error.js";

export const singup = async (req,res,next) => {
    const {username,email,password} =req.body;
    const hashedPassword=bcrypt.hashSync(password,10);
    const newUser=new User({username:username,email:email,password:hashedPassword});
    try {
        await newUser.save()
        res.status(201).json({message:'User create successfully'});
    } catch (error) {
        next(error);
    }
};
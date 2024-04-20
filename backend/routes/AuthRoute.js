import { user } from "../models/models.js";
import { config } from "dotenv";
import jwt from "jsonwebtoken";
import bcrypt from "bcryptjs";

import express from 'express';
const router = express.Router();

const createSecretToken = (id) => {
  return jwt.sign({ id },'3jK2w$PmLbT@4R6n#z8DgXqYtBvEwUyZ'
    , {
    expiresIn: 3 * 24 * 60 * 60,
  });
};

const Signup = async (req, res, next) => {
  try {
    const { firstname, lastname, email, password } = req.body;

    if (!firstname || !email || !password) {
      return res.status(400).json({ message: "Missing required fields" });
    }

    const existingUser = await user.findOne({ email });

    if (existingUser) {
      return res.json({ message: "User already exists" });
    }

    const newUser = { firstname, lastname, email, password };
    const userNew = await user.create(newUser);
    const token = createSecretToken(userNew._id);

    res.cookie("token", token, {
      withCredentials: true,
      httpOnly: false,
    });

    res.status(201).json({ message: "Account Created Successfully. Welcome ! ", success: true, userNew });
    next();
  } catch (error) {
    console.error(error);
    // Handle other errors as needed
    res.status(500).json({ message: "Server error" });
  }
};



const Login = async (req, res, next) => {
    try {
      const { email, password } = req.body;
      if(!email || !password ){
        return res.json({message:'All fields are required'})
      }
      const usern = await user.findOne({ email });
      if(!usern){
        return res.json({message:'Incorrect password or email' }) 
      }
      const auth = await bcrypt.compare(password,usern.password)
      if (!auth) {
        return res.json({message:'Incorrect password or email' }) 
      }
       const token = createSecretToken(usern._id);
       res.cookie("token", token, {
         withCredentials: true,
         httpOnly: false,
       });
       res.status(201).json({ message: "Welcome! ", success: true,id:usern._id });
       next()
    } catch (error) {
      console.error(error);
    }
  }
router.post("/signup", Signup);
router.post("/login",Login);
export default router;

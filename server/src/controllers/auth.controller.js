import User from "../models/user.model.js";
import bcrypt from "bcryptjs";
import { generateToken } from "../lib/utils.js";

export const signup = async (req, res) => {
    
    const { email, fullName, password } = req.body;
    try{
        if (password.length < 6) {
            return res.status(400).json({ message: "Password must be atleast 6 letters" });
        }
        if (!email || !fullName || !password) {
            return res.status(400).json({ message: "All fields are required" });
        }
        const user = await User.findOne({ email });
        if (user) {
            return res.status(400).json({ message: "User already exists" });
        }
        const salt = await bcrypt.genSalt(10);
        const hashedPassword = await bcrypt.hash(password, salt);
        const newUser = new User({
            email,
            fullName,
            password: hashedPassword
        });
        if (newUser){
            generateToken(newUser._id, res);
            await newUser.save();
            res.status(201).json({ 
                _id: newUser._id,
                email: newUser.email,
                fullName: newUser.fullName,
                profilePic: newUser.profilePic,
             });
        }else{
            res.status(400).json({ message: "Invalid user data" });
        }
    }

    catch (error) {
        console.log("Error in signup controller", error.message );
    }
}
export const signin = async (req, res) => {
    const {email, password} = req.body;
    try{
        if (!email || !password) {
            return res.status(400).json({ message: "All fields are required" });
        }
        const user = await User.findOne({ email });
        if (user && (await bcrypt.compare(password, user.password))) {
            generateToken(user._id, res);
            res.json({ 
                _id: user._id,
                email: user.email,
                fullName: user.fullName,
                profilePic: user.profilePic,
             });
        }

    } catch (error) {
        console.log("Error in signin controller", error.message );
    }
}
export const logout = async (req, res) => {
    try{
        res.cookie('jwt','',{maxAge:0});
        console.log("User logged out");
        res.status(200).json({message:"User logged out"});
    
    } catch (error) {
        console.log("Error in logout controller", error.message );
    }
   
}
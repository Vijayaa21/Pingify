import mongoose from "mongoose";

const UserSchema = new mongoose.Schema({
    email:{
        type:String,
        required:true,
        unique:true,
    },
    fullName:{
        type:String,
        required:true,
    },
    password:{
        type:String,
        required:true,
        minLenth: 6
    },
    profilePic:{
        type:String, 
        default:"https://icon-library.com/images/anonymous-avatar-icon/anonymous-avatar-icon-25.jpg"
    }
},
{timestamps:true}
);

const User = mongoose.model('User',UserSchema);

export default User;


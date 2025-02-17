import mongoose from 'mongoose'

const userSchema = new mongoose.Schema({
    full_name:{
        type: String,
        required: true,
    },
    username: {
        type: String,
        required: true,
        unique: true
    },
    password:{
        type: String,
        required: true,
        minlength: 6
    },
    gender:{
        type: String,
        required: true,
        enum: ["male", "female"]
    },
    profile_pic:{
        type: String,
        default: ""
    }
}, {timestamps: true})

export default mongoose.model("User", userSchema)
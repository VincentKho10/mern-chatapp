import User from "../models/user.model.js"
import bcrypt from "bcryptjs"
import generateTokenAndSetCookie from "../utils/generateToken.js"

export const login = async (req,res)=>{
    try {
        const { username, password } = req.body
        const user = await User.findOne({username})
        const isPassValid = await bcrypt.compare(password, user?.password || '')
        
        if(!isPassValid || !user){
            res.status(400).json({ error: "Invalid username or password" })
            return
        }

        generateTokenAndSetCookie(user._id, res)

        res.status(200).json({
            _id: user._id,
            full_name: user.full_name,
            username: user.username,
            profile_pic: user.profile_pic,
        })
    } catch (error) {
        console.log("Error in login controller", error.message)
        res.status(500).json({error: "Internal server error"})
    }
}

export const logout = (req,res)=>{
    try {
        res.cookie("token","", {maxAge:0})
        res.status(200).json({ message: "Logged out successfully"})
    } catch (error) {
        console.log("Error in logout controller", error.message)
        res.status(500).json({error: "Internal server error"})
    }
}

export const signup = async (req,res)=>{
    try {
        let { full_name, username, password, confirm_password, gender } = req.body;
        if (password!=confirm_password){
            return res.status(400).json({error:"Password mismatch"})
        }

        const isUserExist = await User.findOne({username});
        
        if (isUserExist){
            return res.status(400).json({error: "Username already exists"})
        }
        
        const isFullNameExist = await User.findOne({full_name});

        if (isFullNameExist){
            return res.status(400).json({error:"Full name already existed"})
        }

        const profile_pic = `https://avatar.iran.liara.run/public/${gender=="male"?"boy":"girl"}?username=${username}`

        const salt = await bcrypt.genSalt(10)
        password = await bcrypt.hash(password, salt)
        
        const newUser = new User({
            full_name,
            username,
            password,
            gender,
            profile_pic
        })

        if(newUser){
            generateTokenAndSetCookie(newUser.id, res)
            await newUser.save()
            
            res.status(201).json({
                _id: newUser.id,
                full_name: newUser.full_name,
                username: newUser.username,
                profile_pic: newUser.profile_pic,
            })
        } else {
            res.status(400).json({error:"Invalid User Data"})
        }
    } catch (error) {
        console.log("Error in signup controller", error.message)
        res.status(500).json({error:"Internal Server Error"})
    }
}
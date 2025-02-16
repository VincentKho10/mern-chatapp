import User from "../models/user.model.js"
import bcrypt from "bcryptjs"
import generateTokenAndSetCookie from "../utils/generateToken.js"

export const login = (req,res)=>{
    res.send('login user')
}

export const logout = (req,res)=>{
    res.send('logout user')
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
            // await newUser.save()
            
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
import jwt from 'jsonwebtoken'
import userModel from '../models/user.model'

const protectRoute = (req, res, next)=>{
    try {
        const token = req.cookies.token

        if(!token){
            res.status(401).json({ error: "Unauthorized - No Available Token" })
        }

        const decoded = jwt.verify(token, process.env.JWT_SECRET)

        if(!decoded){
            res.status(401).json({ error: "Unauthorized - Invalid Token"})
        }

        const user = userModel.findById(decoded.userId).select("-password")

        req.user = user
        next()
    } catch (error) {
        console.log("Error in protectRoute middleware", error.message)
        res.status(500).json({error: "Internal server error"})
    }
}

export default protectRoute
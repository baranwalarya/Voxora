import User from "../models/user.model.js"

export const googleAuth= async (req,res) => {
    try {
        const {name,email} =req.body
        if(!name || !email){
            return res.status(400).json({message:"Name & email are requires"})
        }
        let user = await User.findOne({email})
        if(!user){
            user = await User.create({
                name , email
            })
        }
    } catch (error) {
        
    }
}
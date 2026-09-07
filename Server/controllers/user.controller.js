// import { use } from "react"
import User from "../models/user.model.js"


export const getCurrentUser = async (req,res) => {
    try {
        const user = await User.findById(req.userId)
        if(!user){
            return res.status(404).json({message:"Failed to get current user"})
        }
        return res.status(200).json(user)
    } catch (error) {
        return res.status(500).json({message:`getCurrentUser error ${error}`})
    }
}

export const saveAssistant = async (req,res) => {
    try {
        const {
            assistantName,
            businessName,
            businessType,
            businessDescription,
            tone,
            theme,
            geminiApiKey,
            pages,
        } = req.body

        const user = await User.findById(req.userId)
        if(!user){
            return res.status(404).json({message:"Failed to get current user"})
        }
        user.assistantName = assistantName;
        user.businessName = businessName;
        user.businessType = businessType;
        use

    } catch (error) {
        
    }
}
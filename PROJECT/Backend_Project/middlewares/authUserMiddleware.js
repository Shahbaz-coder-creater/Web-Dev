import jwt from "jsonwebtoken"
import User from "../model/userSchema.js"



const authUserMiddleware = async (res,req,next)=>{
    try{
        const {token} = req.cookies;

        const payload = jwt.verify(token,process.env.JWT_SECRET);

        const existingUser = await User.findById(payload.id);

        if(!existingUser){
           return res.status(404).json({
                message: "User doesnt Exist"
            })
        }
        req.user = existingUser;  // yaha mai jo user ka data laya tha database se ak isko ak object me store kar rha hu ki dubara mere ko database data fetch kar lana na pre mer ko
        
        next();
    }catch(err){
     console.log(err)
      res.status(500).json({message: "Internal Server Error"})
    }
}

export default authUserMiddleware;
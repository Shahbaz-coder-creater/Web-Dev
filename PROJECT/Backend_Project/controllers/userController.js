import User from "../model/userSchema.js";
import mongoose from "mongoose";
import jwt from "jsonwebtoken";
import cookie from "cookie-parser"


// login
// logout
// signup
// profie
        


//   Note: token is created on the bases of [ _Id , email ]
const createToken = (id , email)=>{

    if(!process.env.JWT_SECRET){
        throw new Error("JWT secrest is not exist");    
    }

        jwt.sign({id,email}, process.env.JWT_SECRET,{expiresIn:"1h"});
         return token;
    }

// cookies optional fields  [it is hard code]
  const cookiesOptional = {
    httpOnly: true ,
    secure: false,
    maxAge: 60*60*1000
  }


//   signUp

export const signup = async (req,res)=>{ 
    //  validate all the data
    try{
    const {email,password,age,name} = req.body;

    if(!email || !password || !name){
        return res.status(400).json({
           message: "Missing field like name password or email"
        })
    }
    //   before signup check email allready exist to nahi karta
    
    const Userexist = await User.findOne({email});

    if(Userexist){
        return res.status(409).json({
            message: "User allready exist"
        })
    }

    // password ko ko encrypt kiya bcrypt kita 
     
    const hashpassword = await bcrypt.hash(password,12)  // 12 is salt add
    //    user create karenge 
    const usercreated = await User.create({
         name,
         password:hashpassword,
         email,
         age
    });
    // token function call [token create kar diya]
    const token = createToken(usercreated._id, email);
    // browser ko cookies bhejana parenga na
    res.cookie("token", token , cookiesOptional);
    res.status(201).json({
        message: "User is created Successfully",
        name,
        age,
        email
    });  

 }  
catch(err){
    console.log(err);   // yaha pe mai khud ke liye error print kar rha hau
    res.status(500).json({
        message:"Internal server error"
    })
}    

}

//   login

export const login = async (req,res)=>{
    try{
           const {email,password} = req.body;

           if(!email || !password){
             return res.status(400).json({
                message: "email or password is missing"
             })
           }
             
            // find user on the bases of email
            const existingUser = await User.findOne({email});

            if(!existingUser){
                return res.status(401).json({
                    message:"invalide credentials"
                })
            }
            //  match the password 
            const isMatch  = await bcrypt.compare(password,existingUser.password);

            if(!existingUser){
                return res.status(401).json({
                    message: "Invalid credentinals"
                })
            }           

            const token = createToken(existingUser._id,email);
            res.cookie("token",token,cookiesOptional);
            res.status(200).json({
                message: "user login successfully",
                name:existingUser.name,
                age: existingUser.age,
                email:existingUser.email,
                usage:existingUser.usage
            });
        }catch(err){
            console.log(err);
            res.status(500).json({
                message: "Internal server error"
            })

        }   
}


//   logout

export const logout = async (req,res)=>{
    //   my aproch is remove your token [clearCookie]
    res.clearCookie("token",{
        httpOnly: true,
        secure: false
    })

    res.status(200).json({
        message: "User logout successfully"
    })
}


// //   profile
 
// export const profile = async (req,res)=>{
//     try{
//         const {email} = req.body;
        
//         if(!email){
//             return res.status(400).json({
//                 message: "email is missing"
//             })
//         }

//         const existingUser = await User.findOne({email});
//         if(!existingUser){
//             return res.status(401).json({message:"Invalid email"})
//         }

//         res.status(200).json({
//             message: "User profile successfully find",
//             name:existingUser.name,
//             age:existingUser.age,
//             email:existingUser.email,
//             usage: existingUser.usage
//         })

//     }catch(err){
//         console.log(err);
//         res.status(500).json({message:"Internal Server error"})
//     }
// }



// profile  me edit karna ke bad user keya dikhega profile me 

export const profile = async(res,req)=>{
    try{
        // profile ki information send karna user ko 
        // database ke ander call kari padgi , us user ko serach , id, email
     res.status(200).json({
        name:req.use.name,
        age:req.use.age,
        email:req.use.email,
        usage:req.use.usage
     })

    }catch(err){
        res.status(500).json({message: "Internal Server error"})
    }
}
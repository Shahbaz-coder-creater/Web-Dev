import express from "express";
import User from "./schema.js";
import mongoose from "mongoose";
import jwt from "jsonwebtoken";
import cookieParser from "cookie-parser";
import dotenv from "dotenv";

dotenv.config();

await mongoose.connect(process.env.MONGO_URL);
// console.log("MongoDB connected");

const app = express();
app.use(cookieParser());
app.use(express.json());


app.post("/sign" ,async (req, res)=>{
    const {name,age,email,password} = req.body;

    const userCreate = await User.create({
        name,age,email,password
    });

    // token create (bhejana)
    // inside the token (palayload , secret key , optional field )

     const token  = jwt.sign({
        email:email,  // palyload
        name: name
     },
     "Shahbaz@5624", // Secret key
     {expiresIn:"2h"} // expire date / other field

    );
    // ab mai browser se bat kar rha hu mai ya  karna chata mai
     res.cookie("token" , token,{
          httpOnly: true, // your jawascrit code open on browser so frontend jswascript cannot read this cookie. and Protect JWT from being stolen by frontend JavaScript.
          secure: false, // that cookie work on HTPP [if want to cookie work on HTPPS use {secure: true}]
          maxAge: 60*60*1000 // that is your cookie expery 
     })
     res.json({
        message:"User Profile created"
     });
});

   //    how to get User Profile

     app.get("/profile" , async (req,res)=>{

      //  first a fall send token to the body
      const {token} = req.cookies;


      // verify this token is valid or not so we known that payload have our data and secreat key
      const payload = jwt.verify(token , "Shahbaz@5624");
         const Userfind = await User.findOne({email:payload.email})
        
           if(Userfind){
              res.json({
               message:"User Profile is here",
               data:Userfind
               });
           }else{
            res.json({
               message:"User is not Found"
            });
           }
         
     });


   // //   User Login concept


   app.post("/login",async(req,res)=>{
     
      // if user login so user have email and password

      const {email,password} = req.body;


      // first a fall find User in database

      const Userfind = await User.findOne({email:email});

      // if user find so match the password of user
        if(Userfind){
      if(password == Userfind.password){

      //  after password matching sign the token

      const token = jwt.sign({
         email:email,
         name:Userfind.name
      },
         "Shahbaz@736",
         {expiresIn:"1h"}
      );

      //  again browser se bat karna chata hu to mai cookie ka istemal karugan mai
      // keyu browser use cookie ko store karega usi ke ander hmara token rahega

      res.cookie("token" , token ,{
         httpOnly: true,
         secure:false,
         maxAge:60*60*1000
      })
      res.json({
         message: "User login successfully"
      })
   }
   else{
      res.json({
         message: "User is not found"
      })
   }
}
else{
   res.json({
      message:"User is not found"
   })
}
   })

   // const URL = 3000;
   app.listen(3000,()=>{
    console.log("port running at 3000");
})





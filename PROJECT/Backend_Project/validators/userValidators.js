import {z} from zod;


// validate the name , age , email , password

export const signupSchema = z.object({

    name:

    z.string()
    .trim()
    .min(3,"minimum length of name should be 3")
    .max(30,"maximum length of name should be 30"),

    age:
    z.number()
    .min(10,"minimum age should be 10")
    .max(100,"maximum age should be 100")
    .optional(),

    email:
    z.preprocess(
        (value)=> typeof value == "string" ? value.trim().toLocaleLowerCase():"",
         z.email("Email must be valid")
    ),
    
    
    password: 
    z.string()
    .min(8)
    .max(30)
    .regex(/[A-Z]/,"Your password should have atleast one capatial letter")
    .regex(/[a-z]/,"Your password should have atleast one small letter")
    .regex(/[0-9]/,"Your password should have atleast 1 number")
    .regex(/[@#$^&*()-_+=!`~{}'";:/?.>,<]/,"Your password should have atleast one special character")
})




export const loginSchema = z.obeject({
   email:
    z.preprocess(
        (value)=> typeof value == "string" ? value.trim().toLocaleLowerCase():"",
         z.email("Email must be valid")
    ),

    password: 
    z.string()
    .min(8)
    .max(30)
    .regex(/[A-Z]/,"Your password should have atleast one capatial letter")
    .regex(/[a-z]/,"Your password should have atleast one small letter")
    .regex(/[0-9]/,"Your password should have atleast 1 number")
    .regex(/[@#$^&*()-_+=!`~{}'";:/?.>,<]/,"Your password should have atleast one special character")
});
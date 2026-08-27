import express from "express";
import mongoose from "mongoose";
import Customer from "./buildDatabase.js";
import Users from "./User.js";


const app = express();



await mongoose.connect("mongodb+srv://shahbazalicgs5624_db_user:6RZovWeKFhqzPwEm@cluster0.7a3kv8t.mongodb.net/Customer")
// here we connected with DB [pahle db se connect ho us ke bad listenkaro ya respond karo]
app.use(express.json());

//  create a single Customer
// app.post("/customer",async(req,res)=>{
//     const customer = await Customer.create(req.body);
//     res.json({
//         message: "User create is successfully",
//         customer: customer
//     })
// })
// //  create multiple customer data like [Bulk]
// app.post("/customer/bulk",async(req,res)=>{
//     const customer = await Customer.insertMany(Users);
//     res.json({
//         message: "User create is successfully",
//         customer: customer
//     })
// })

// app.get("/customer", async (req,res)=>{
//     const customers = await Customer.find();
//     res.json({
//         message: "All customer Data is here ",
//         customers:customers
//     })
// })


//  how to data filter

// app.get("/customer/filter" , async (req,res)=>{
//      const {city,accountType, balance} = req.query;  // yaha pe mai url me jake query bhej raha hu mai
//     // req.query = {city: "Banglore", accountType: "current"} // pahle hi mai isme query bhej diya hu mai 
//    const customers = await Customer.find(req.query);
   
//        res.json(customers);
// })

// // fetch particular customer information on the basis of its accountNumber
// app.get("/customer/:accountNumber",async (req,res)=>{
//     const accountValue = req.params.accountNumber;
//     const customers = await Customer.findOne({accountNumber:accountValue});
    
//     if(!customers){
//     res.json({
//         message: "customer dosent exist",
//     })
//     }else{
//         res.json({
//                message: "Customer information",
//             customers: customers
//         })
//     }
// })

// delete user on the base of accountNumber
// app.delete("/customer/:accountNumber", async (req,res)=>{
//     const accountvlaue = req.params.accountNumber;
//     const customers = await Customer.findOneAndDelete({accountNumber:accountvlaue});

//     if(!customers){
//         res.json({
//             message: "customer is not exist"
//         })
//     }else{
//         res.json({
//             message:"Customer is deleted",
//             customers:customers
//         })
//     }

    
// })


// app.patch("/customer", async (req, res) => {
// // const { balance, age } = req.body;

// const { balance, age,accountNumber } = req.body;

// // const customer = await Customer.findOneAndUpdate({ accountNumber: req.body.accountNumber },
// const customer = await Customer.findOneAndUpdate({ accountNumber:accountNumber },
//         {
//             $set: {
//                 balance: balance,
//                 age: age
//             }
//         },
//         {
//             new: true
//         }
//     );

//     if (!customer) {
//         return res.json({
//             message: "Customer does not exist"
//         });
//     }
//     res.json({
//         message: "Customer data is updated successfully",
//         customer: customer
//     });
// });

//   Deposite amount
// app.patch("/customer/:accountNumber/deposit" , async (req,res)=>{
//     const accountNumber = req.params.accountNumber;
//     const {amount} = req.body;

//     const customers = await Customer.findOneAndUpdate(
//         {accountNumber:accountNumber},
//         {$inc: {balance:amount}},
//         {new: true}
//     );
//     res.json({
//         message: "Deposite is succesfully",
//         customers:customers
        
//     })

// })

// Amount Widrawal
 app.patch("/customer/:accountNumber/withdraw", async(req,res)=>{
    const accountNumber = req.params.accountNumber;
    const {amount}  = req.body;

    const customers = await Customer.findOne(
        {accountNumber:accountNumber}
        );
        if(customers.balance < amount){
           return res.json(
            {message:"Your balance is insufficient"}
        ) 
        }

        customers.balance = customers.balance - amount ;
        await customers.save();
        res.json({
          message: "your ammont is successfully withdraw",
          customers:customers
        })
        
 })
  
app.listen(3000,()=>{
    console.log("port running at 3000");
})

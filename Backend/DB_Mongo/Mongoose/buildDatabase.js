
import mongoose from "mongoose";
// name , accountNumber , city , age , balance , accountType iska mere ko schema bana hai 
const UserSchema = new mongoose.Schema({
  name:{
    type: String,
    minLength:3,
    maxLength:20,
    trim: true,
    required: true
  },
  accountNumber:{
    type: Number,
    required: true,
  },
  city:{
     type: String,
    minLength:3,
    maxLength:20,
    trim: true,
    required: true
  },
  age:{
    type: Number,
    min: 18,
    max: 100
  },
  balance:{
    type: Number,
    min:0,
    required:true
  },
  amount:{
    type: Number,
  },
  accountType:{
    type: String,
    enum:["saving" , "current"]
  }
},{Timestamp:true})

const Customer = mongoose.model("Customer",UserSchema);
// Customer name se  collection build hojega
export default Customer;
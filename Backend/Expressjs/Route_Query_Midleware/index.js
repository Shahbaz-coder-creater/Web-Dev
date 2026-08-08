import express from "express"
import { products } from "./data.js";
const app = express();
  

app.use(express.json());

    app.get("/",(req,res)=>{
        res.send("hellow ji");
    })

app.listen(3000,()=>{
    console.log("I am listening at port 3000");
})
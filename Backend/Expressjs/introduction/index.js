import express from "express"   // import file from module [express]
const app = express();   // there is express server is created  [server]
//Midleware
app.use(express.json());  // jo [use] hai kisi bhi method ko accepet akr lega chaheye get, patch, delete etc ho  and [express.json] ye string data ko object data me convert akr dega
// isko pahle hi hi top pe likh dte ahi ki excution start ho to top se jo bhi data aye chaheye get ,patch delete etc ho sabhi object me convert kar dega.
//  ye sari all ready build hai expressjs me Nodejs me manually create karna parta tha in method ko .

// app ek object, get ek method hai, 2 argument: url match karata, callback ko implement kar deta hai
// saare path ko accept karta hai: get, post, patch, put, delete
app.get("/user",(req,res)=>{
    res.send("hii i am get");
})
app.post("/user",(req,res)=>{
    console.log(req.body);
    res.send("hii i am post");
})
app.patch("/user",(req,res)=>{
    res.send("hii i am patch");
})
app.delete("/user",(req,res)=>{
    res.send("hii i am delete");
})
app.get("/",(req,res)=>{
    res.send("hii i am slaysh get");
})

app.listen(3000,()=>{
  console.log("I am listning at port 3000");
})
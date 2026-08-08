//  import http from "http";
 
//   const database = [
//     {name:"shahbaz ali", age:14 , email:"shahbazali5624@gmail.com" , amount: 200},
//     {name:"Basid", age:34 , email:"basid@gmail.com" , amount: 300},
//     {name:"Aman", age:23 , email:"aman@gmail.com" , amount: 400}
//   ]
  
//  const server = http.createServer((req,res)=>{
//    if (req.method == "POST" && req.url == "/users"){
//     // hame isiliyre Undefine dikha rha hai keyu ham log wait nahi kar rhae hai 
//     //  to hame wait karna perenga jab tak data user ne bheja hai , wo ane do
//           // const Users = req.body;
//           // console.log(Users);
//           // res.end("Post is successfully");

//   //  to isko handle kane ke liye build in function atah hai usi se handle karunga mai
//           let body = "";
//           req.on("data" , (packet_data)=>{
//           body+=packet_data;  // yaha pe jise - jaise data ayega o secondry storage ke store hote jayega use assmeble kar ke gena hai
//             // ye build in function hai req.on() jo function hai ye hame jitne bhi packet ke form me data arhe hai ye [on] asani se handle kar lega jo packet_data arahe hai usko empty string body ke ander assign karate jaoo . bar - bar callback hote rahega isko bbhi handle karte rahenge
            
//           })
//           req.on("end",()=>{    // jo ye callback ko handle karenga 
//           const user = JSON.parse(body); 
//           database.push(user) ;
//           res.end("User is created succesfully");
//           // js object me convert kar dega
//           })
//    }
//     else if(req.method == "GET" && req.url == "/users"){
//       res.end(JSON.stringify(database));
//     }
    
//  });
 import http from "http"


const Database = [
    {name:"Rohini", age: 10, email:"rohini@gmail.com", amount: 90},
    {name:"Rohan", age: 30, email:"rohan@gmail.com", amount: 190},
    {name:"Sohan", age: 20, email:"Sohini@gmail.com", amount: 900}
];

const server = http.createServer((req,res)=>{
   
    // get, post, put, patch , delete

    if(req.method == "POST" && req.url == "/user"){
        // wait kar, poora data user ne bheja hai, wo aane de
        let body = "";
        req.on("data", (chunk)=>{
            body+=chunk;
            // second storage save kar do
        });
        req.on("end",()=>{
            const user = JSON.parse(body);
            Database.push(user);
            res.end("User is Created successfully");
            // js object mein convert ho paaye
        });
    }


    else if(req.method=="GET" && req.url == "/user"){
        res.end(JSON.stringify(Database,null,2));
    }

        else if(req.method=="PATCH" && req.url=="/user"){
        let body = "";
        req.on("data", (chunk)=>{
            body+=chunk;
            // second storage save kar do
        })
        req.on("end",()=>{
            const user = JSON.parse(body);
            
            const findUser = Database.find((u)=> u.email == user.email);

            Object.assign(findUser,user)
            
            // for(const {key,value} of Object.entries(user)){
            //     findUser[key] = value;
            // }

            res.end("Information updated succesfully");
            // js object mein convert ho paaye
        })
    }
    });
 
 server.listen(3000,()=>{ 
     console.log("I am listening at port 3000");
 });
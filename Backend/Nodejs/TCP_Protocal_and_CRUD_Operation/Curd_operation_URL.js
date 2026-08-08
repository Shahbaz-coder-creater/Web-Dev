const http = require("http");
const url = require("url");
const Database = [{Name:"Shahbaz Ali",Roll_No:"25DCS8046",Email_Id:"shahbazali5624@gamil.com"},
    {Name:"Abdul Basid",Roll_No:"25DCS8063",Email_Id:"basid345@gamil.com"}
];


// User Create Account
function createUser(user){
    Database.push(user);
    console.log(Database);

}

 //  delete user email 
function deleteUser(User){
    for(let i = 0 ; i<Database.length;i++){
       {
        Database.splice(i,1);
    break;
    }
  }
}
//   patch Update
function patchUser(User){
    for(let i = 0 ; i < Database.length; i++){
            if(Database[i].Email_Id == User.Email_Id){
                User.Email_Id = Email_Id;
            }
    }
}
    const server = http.createServer((req,res)=>{

   console.log(req.url);
   const parsed = url.parse(req.url, true);
   const operation = parsed.pathname.slice(1);
        
    //    create operation perform [Post]
   if(operation == "createUser"){
      createUser(parsed.query);
      res.end("User is created");
      return;
   } 

    // Read Operation perform [Get]
   else if(operation == "getUser"){
     res.end(JSON.stringify(Database));
     return;
   }

//     patch operation perform [update data]
 else if(operation=="patchUser"){
     patchUser(parsed.query);
     res.end("patch is upadate")
     return;
    }


//     delete operation perform 
     else if(operation == "deleteUser"){
        deleteUser(parsed.query);
        res.end("I have User is deleted")
        return;
     }

     res.end("I am not availeable");
})

server.listen(3000,()=>{
    console.log("I am listening port at 3000")
});
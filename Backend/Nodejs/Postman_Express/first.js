import http from "http";

const server = http.createServer((req,res)=>{
     
   if(req.method == "GET" && req.url == "/users"){
    res.end("Data is Read");
   }

   else if (req.method == "PUT" && req.url == "/users"){
    res.end("Your Data is update");
   }

   else if(req.method == "PATCH" && req.url == "/users"){
    res.end("Your Data is Partially Update");
   }

   else if (req.method == "DELETE" && req.url == "/users"){
    res.end("Your Data is Delete");
   }

   else if (req.method == "POST" && req.url == "/users"){
    res.end("Your Data is created ");
   }

    else {
        res.end("I am avealiable");
    }
});


server.listen(3000,()=>{
    console.log("I am listening at port 3000")
});
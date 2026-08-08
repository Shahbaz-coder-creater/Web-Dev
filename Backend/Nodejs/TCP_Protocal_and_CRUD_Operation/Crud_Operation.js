// const { json } = require("body-parser");
const http = require("http");

const Database = [{Name:"Shahbaz Ali",Roll_No:"25DCS8046",Email_Id:"shahbazali5624@gamil.com"},
    {Name:"Abdul Basid",Roll_No:"25DCS8063",Email_Id:"basid345@gamil.com"}
]

const server = http.createServer((request,respond)=>{
      
//    How to read [Get] data
if(request.url == "/readData"){
    respond.end(JSON.stringify(Database));
}
//   How to ceate [Post] data
else if(request.url == "/createData"){
    Database.push({Name:"Arbaj Ali" , Roll_No:"25DCS34"});
    respond.end("Your Data is Created");
}
//   How to ceate [Post] data 
 else if(request.url == "/deleteData"){
    Database.pop();
    respond.end("Your Database is Delete");
 }
});

server.listen(2000,()=>{
    console.log("I am lisning at port 2000");
})
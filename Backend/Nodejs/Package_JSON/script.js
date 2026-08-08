// const { createServer } = require("http");
// const http = require("https");

// const server = createServer((req,resp)=>
// {
//     resp.end("Hellow shahbaz Ali");
// });

// server.listen(200,()=>{
//    console.log("I am listining on 200");
// })

const validator = require("validator");
const email = "shahbazali5624@gmail.com";
const passward = "shahbaz234@34A";

console.log(validator.isStrongPassword(passward));
console.log(validator.isEmail(email));



// format check kar rha hu
// Password hai, kya wo strong hai?
// frontend: Is data ko validate kar deta hu....

// custom code likhu???
// Internet: Code ko already likh rkha hoga, mein direct us code use kar lunga
// validator.isEmail('foo@bar.com')
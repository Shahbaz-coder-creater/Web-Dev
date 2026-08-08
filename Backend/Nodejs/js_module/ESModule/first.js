
// import { shahbaz } from "./second.js";
// import { add,Login } from "./third.js"; // Import kuch aise bhi kar skte hai

// console.log(add(10, 20));
// console.log("Hellow shahbaz ali");
// let a = 5;
// let b = 3;
// // payment(500);
// // shahbaz();
// add(3,4);
// Login(shahbaz,1234);
// console.log(a+b);


// function login() {
//     console.log("Login Success");
// }

// function payment() {
//     console.log("Payment Success");
// }

// export { login, payment };


// how to import default data
// import login from "./second.js";

// login();


//   how together import default module and with object module
import login, { payment } from "./third.js";

login();
payment();
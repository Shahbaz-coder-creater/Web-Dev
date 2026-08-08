// function add(a, b) {
//     return a + b;
// }
// module.exports = function Login(Name,password){
//     if(Name === "String" && password === "Number"){
//         console.log(`${Name} you are login your portal and your password is ${password}`);  
//     }
//     else{
//         console.log("You are not loggin Plese enter your correct passward");
//     }
// }

// export { add , Login};



//   how together import default module and with object module


function login() {
    console.log("Login Success");
}

function payment() {
    console.log("Payment Success");
}

export default login;
export { payment };
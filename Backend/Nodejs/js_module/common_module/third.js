function add(a, b) {
    return a + b;
}
module.exports = function Login(Name,password){
    if(Name === "String" && password === "Number"){
        console.log(`${Name} you are login your portal and your password is ${password}`);  
    }
    else{
        console.log("You are not loggin Plese enter your correct passward");
    }
}

export { add , Login};
//   callback function
//  ak function ke ander function ko pass karte hai as augument / parameter

//  shahbaz=function(){
//     console.log("Hellow shahbaz ali")
// }

//  ali=function(){
//     console.log("Hellow Ashmmhamomd");
// }
// shahbazali = function(hiii){
//     console.log("Arbaz");
//     hiii(); // callback function ka istemal huwa hai
// }
// shahbazali(shahbaz); // kuch aise call karte hai function ko


// let suppose we have zomato payment server , this server used in blinket server

// function Zomato(){
//   console.log("Restorant preparing your order");
// }
// function Blinket(){
//    console.log("Your order is packing");
// }
// function payment(num,callback){
//     console.log("Payment is happaning");
//     console.log("Paymnet is complete",num);
//     callback();
// }
// payment(500,Zomato);
// payment(400,Blinket);
// zomato();


// function add(num,num1,num3){
//    return num+num1+num3;
// }
// function sub(num,num1,num3){
//    return num-num1-num3;
// }
// function mul(num,num1,num3){
//    return num*num1*num3;
// }

// function allfun(num,num2,num3,callback){
//     console.log("Your ans is = ");
//     // console.log(callback(num,num1,num3));
//     // return callback(num,num1,num3);
//     console.log(callback(num , num2 , num3));
    // callback(num , num2 , num3);
    
// }
//allfun(sub(2,3,4)); //Yaha tum sub() ko call kar rahe ho, jabki callback me function pass karna hota hai.

// allfun(2,3,4,sub);


// allfun(2,3,6,function(a,b,c){
//    return a+b+c;
// })


// allfun(2,3,6,(a,b,c)=>{
//    return a+b+c;
// })




// [note point callback ke jagah kuch bhi likh skte hai]


// // Filter a particular part ko select akr ta hai AND OTHER VLAUE KO REMOVE KAR DTA HIA 
// AND O/P PE AK ARRAY RETURAN KAR DETA HAI

// const arr = [22,44,56,75,43,77,444,33,11,89,90]
// const answer = arr.filter((num)=>num>50);
// console.log(answer); // O/P [ 56, 75, 77, 444, 89, 90 ]

//  ye isko aise bhi likh skte hai
// const arr = [22,44,56,75,43,77,444,33,11,89,90]
// const answer=[];
//  for(let num of arr){
//         if(num>50)
//             answer.push(num);
        
    // }
    //  console.log(answer);

//   ye isko aise bhi likh skte hai
// const arr = [22,44,56,75,43,77,444,33,11,89,90];
// const shahbaz = (num1)=> num1>50;

// const answer=[];
//  for(let num of arr){
//         if(shahbaz(num))
//             answer.push(num);
        
//     }
//      console.log(answer);

// CONCLUSION POINT YE AYA KI FILTER KA USED KARTE HAI


// // what is this keyword ?
// // JavaScript me this keyword ka matlab hota hai: jis object se current function call ho raha hai, us object ko refer karna.

// // Simple language me:

// // this batata hai ki "main kis object ke andar kaam kar raha hu?

// // Normal function me this keyword ka use
// // Bas function ko kis tarike se call kiya hai, wahi decide karta hai this.
// // function shahbaz(){
// //     console.log(this); isi ko this function hai
// // }

// // let user = {
// //     name:"Ali",
// //     ali:{
// //         ah:function(){
// //             console.log("inside ah");
// //         }
// //     }
// // }

// // shahbaz.call(user.ali.ah);



// Array.prototype.filtred = function (Callback){
// const asnwer = [];

//     for(let num of this){
//         if(Callback(num))
//             asnwer.push(num);
        
//     }
//      return asnwer;
// }
// //  this keyword ka simple sa mamla hai jo array mere ko call kareha mai usi ko refaror karunga mai
// let arr = [12,34,56,765,122,78,977,778];
// const anss = arr.filtred((num)=> num>10);
// console.log(anss);

// const a = [3,4,5,6,78434,9,2,34,11,34]
// const ans = a.filtred((num)=> num>100);
// console.log(ans);






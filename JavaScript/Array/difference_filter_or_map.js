// // 1. filter() → condition ke basis par items select karta hai
// // Matlab: jo element condition true karega, wahi new array me jayega.
// // Example:
// let arr1 = [10,20,30,40,50];
// let ans = arr1.filter((num)=>{
//         return num > 25;
// });
// console.log(ans);

// // Filter original array ko change nahi karta.

// const arr = [10,20,40,50,74];
// const newArr = arr.filter((num)=>num>50);
// console.log(newArr);


// //  Map 
// // 2. map() → har element ko change karke new array banata hai
// // Matlab: har element par kuch operation karo aur result return karo.
// // Example:

// // let arr = [10,20,30,40];
// // let ans = arr.map((num)=>{
// //     return num * 2;
// // });
// // console.log(ans);


// // const arra = [10,20,40,50,74];
// // const newArra = arr.map((num)=>num*5);
// // console.log(newArra);



// Problem marks print karna hai and name ko bhi kon pass hai
// filter = "kaun kaun chahiye?"
// map = "sabko kis form me chahiye?" ✅
// let students = [
//  {name:"Ali", marks:80},
//  {name:"Ahmed", marks:40},
//  {name:"Sara", marks:90}
// ]
// // Pass students nikalna:
// let pass = students.filter((student)=>{
//     return student.marks > 50;
// });
// // Sirf names nikalna:
// let names = students.map((student)=>{
//     return student.name;
// });
// console.log(pass,names);
// Object with method [iska matlab object ke ander function bana skte hai]
// [object ke ander object bana skyte hai and object ke ander array bhi bana skte hai]
const user = {
    name: "shahbaz ali",
    age: 35,
    gamil:"gmail.com",
    arr:[13,"shahbaz", 67 , "Rohit"],  // object ke ander array bana skte hai
    apple:function(){
        console.log("hellow world");   // object ke ander function bana skte hai
    },
    address:{ // object ke ander new object bana skte hai bana skte hai so it is called nasted object
        city: "Lauriya",
        Pincode: 3243434
    }
}
// user.apple(); // direct call function
// console.log(user); // all vlaue ko print kiya 
// console.log(user.apple);

// nasted object ko access kare
// console.log(user.address.Pincode);
// single element ko access kar rhae hai 
// console.log(user.age);

// new element ko add kaise kare
// user.ifc_code = 433535355;
// console.log(user.ifc_code);

// update kaise kare element ko
//  user.age = 46;
//  console.log(user.age);

 // Key ko kaise delete kare
 // key means[name , age , email etc ye sab key hai isko hamlog string man skte hai] 
//  delete user.age;
//  console.log(user);

// keys ko print karna hai
// ye ak array reteuran kar ke dega ak string format [ 'name', 'age', 'accountNumber', 'balance', 'city' ]
// const customer = {
//     name: "shahbaz",
//     age: 56,
//     accountNumber: 4354545452,
//     balance: 100000,
//     city: "Ramnager"
// }
//console.log(Object.keys(customer)); //keys print hogaii kuch aise [ 'name', 'age', 'accountNumber', 'balance', 'city' ]
// ab mughe keys ki value print karani hai to 
// console.log(Object.values(customer));  // o-p [ 'shahbaz', 56, 4354545452, 100000, 'Ramnager' ]

// if hame keys and values do ak sath print karani hai to 
// ye 2D array return kar ke dega
// [
//   [ 'name', 'shahbaz ali' ],
//   [ 'age', 35 ],
//   [ 'gamil', 'gmail.com' ],
//   [ 'arr', [ 13, 'shahbaz', 67, 'Rohit' ] ],
//   [ 'apple', [Function: apple] ],
//   [ 'address', { city: 'Lauriya', Pincode: 3243434 } ]
// ]
// console.log(Object.entries(user)); 


//  if all key print manually how to do it
//  const customerkeys = Object.keys(customer); //that is array
// console.log (customerkeys);  // o-p ak array return kar ke dega [ 'name', 'age', 'accountNumber', 'balance', 'city' ]
// for(const key of customerkeys){ 
// // aisa o-p milega
// // name
// // age
// // accountNumber
// // balance
// // city
//     console.log(key);
// }


// dono ak sath print akra skte hai keys and values ko bhi
//  phale keys ko array me store kiya mai
//  const customerkeys = Object.keys(customer);
// [key] = "name"
// [key] = "age"
// [key] = "accountNumber"
// [key] = "balance"
// [key] = "city"
//  step by step ayega 
// for(const key of customerkeys){ 
//     console.log(key , customer[key]);
//name shahbaz
// age 56
// accountNumber 4354545452
// balance 100000
// city Ramnager
// }

//  kaii jagah aise bhi likte hai
// Condition if i have a array , I can for of loop here
// for(const key of Object.keys(customer)){
//     console.log(key);  // yaha pe srif key print kar ke dega
// }
// for(const value of Object.values(customer)){ // yaha pe value array me ayega
//     console.log(value);  // yaha pe srif key ka value  print kar ke dega
// }

// 2D array
 // [["name","shahbaz ali"],["age","35"],["accountNumber","2314432434"]] 
// for(const [key , value] of Object.entries(customer)){ // [for of] loop srif array pe apply hota hai 
//     console.log (key , value);
// }

// object are reference type
// let obj1 = {
//     value:10,
//     age: 38
// }
// let obj2 = obj1; // copy the reference not object
// obj2.value = 40;
// console.log(obj1.value); // the original value is change 40


// how the copy an Object (Shallow Copy)
// const customer ={
//     name:"shahbaz",
//     age: 29,
//     city: "Lauriya"
// }
// keys name ko rename kar diya mai
// isko destructricting kahte hai
// const {name: valuename , age: agename} = customer;
//  console.log(valuename,agename); 

// seprad opertaor [do value ak dusre ko point kar rahe ho to mai chata hu ye ak dusere ko alag - alag point kare

// const customer2 = customer; // ye dono ak dusere ko point akr rhae hai
// const customer2 = {...customer}; // ab ye dono alag alag point kaenge
// customer2.name = "ali"
// console.log(customer2); // o-p { name: 'ali', age: 29, city: 'Lauriya' }
// console.log(customer); // o-p { name: 'shahbaz', age: 29, city: 'Lauriya' }


const customer ={
    name:"shahbaz",
    age: 29,
    city: "Lauriya",
    arr:[10,20,30,40],
    address: {
        pincode: 234567
    }
}
// const customer2 = customer;
// const customer2 = {...customer};
// customer2.name = "ali";
// customer2.address.pincode = 5;
// customer2.arr.push(45);
// console.log(customer2);  // ye starting object ke jo change honge usko dono effect prega but nasted arr ya object hai do me same rahega change hoga to dono me hoga
// console.log(customer);  // ye starting object ke jo change honge usko dono effect prega but nasted arr ya object hai do me same rahega change hoga to dono me hoga


// const customer2 = structuredClone(customer);
// customer2.arr.push(88);
//  console.log(customer); o-p
//  {
//   name: 'shahbaz',
//   age: 29,
//   city: 'Lauriya',
//   arr: [ 10, 20, 30, 40 ],
//   address: { pincode: 234567 }
// }
//  console.log(customer2); o-p
//  {
//   name: 'shahbaz',
//   age: 29,
//   city: 'Lauriya',
//   arr: [ 10, 20, 30, 40, 88 ],
//   address: { pincode: 234567 }
// }
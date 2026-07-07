// spread operator


// defination: Spread = failana (expand karna) 
//  use : Jab kisi array/object ki values ko copy ya expand karna ho.
// Example:1
//  let arr = [2,3,4,5,6,7,8,9];
//  const arr2 = [...arr];
//  console.log(arr2); ye dono same memory ko point karenge[arr,arr2]
//  Example:2
// aha ...fruits ne array ke andar ki values ko faila diya[expand kar diya].
// let fruits = ["apple", "banana", "mango"];
// let newFruits = [...fruits, "orange"];
// console.log(newFruits);

// Rest operator
// defination: Rest = ikattha karna (collect karna)
// use: Jab bahut sari values ko ek variable me collect karna ho.

// Example 1 :
//Yaha sare arguments ek array me aa gaye
// function Number(...arr){
//   console.log(arr);
// }
// Number(2,3,4,5,6,7,8); 

// Example 2:
// function sum(...nums){

//  let total = 0;

//  for(let n of nums){
//     total += n;
//  }

//  return total;
// }

// console.log(sum(1,2,3,4));


//  Example 3: Destructring
// let arr = [10 , 20 ,34, 56,67];
// let[first,second,...third] = arr;
// console.log(third); // o-p [ 34, 56, 67 ]


// object
// let user = {
//  name:"Ali",
//  age:20,
//  city:"Delhi"
// };
// let {name,...other} = user;   // using keys name
// console.log(name);
// console.log(other);




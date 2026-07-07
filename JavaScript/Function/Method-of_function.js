// method 1 [  how to make function]
// function shhabaz(){
//     console.log("hellow shahbaz ali");
// }
// shhabaz(); // function call
 
//  parameter passes
// function shhabaz(ali,shahb){
//     console.log("hellow shahbaz ali");
// }
// shhabaz(console.log("hellow"),console.log("hellow")); // yaha do parameter pass kiye hai


// function shhabaz(ali,shahb){
//     // return ali+shahb;
//     console.log(ali+shahb);
    
// }
// shhabaz(5,6);
// let a = shhabaz(5,6);
// console.log(a);



// function shhabaz(ali,shahb,a=0,b=0,c=0){
// return ali+shahb+a+b+c;
  
    
// }
// console.log(shhabaz(5,6,4,7,9)); // because od a=0 , b = 0 , c = 0
// console.log(shhabaz(5,7,9));
// console.log(shhabaz(5,6));


// function add(num1){
//     return num1+num2+num3;
// }
// console.log(add(45,6,6)); output pe erroe milega is not possible drfault me [NaN]



//  if user give a large number pareameter how to handle this
// like as console.log(addNumber(3,4,5,6,7,8,9,34,5,6,34,67,86,45,789,44,,6,453,,43,5,5,6,6,,6,54343,,4,54,4,55,4,554,54))
//  this problem of solution is [Rest operator]

// function add(...num){
// let sum = 0;
// for(let a of num){
//     sum+=a;
// }
// return sum
// }
// console.log(add(2,3,4,5,56,6,7,7,7,78));

 
// method 2 [ how to make function and it store in variable]

// const shahbaz = function(){
//     console.log("hellow shahbaz ali")
// }
// // console.log(shahbaz); // o-p [Function: shahbaz]
// console.log(shahbaz()); // o-p hellow shahbaz ali    undefined
// // how to call function 
// shahbaz();  // hellow shahbaz ali kuch asie call karenge

//  hoe to pass parameter 
// const shahbaz = function(num1,num2,num3){
//         let a = num1+num2+num3;
//         return a ;
// }
// console.log(shahbaz(5,6,7));



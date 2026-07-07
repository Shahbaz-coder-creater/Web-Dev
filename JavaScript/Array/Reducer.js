// const arr = [10,20,30,40,50];
// reducer kuch aise kam karega 
//  ye add ke function tha
// accumulator = 0 
// accumulator = 0+10
// accumulator = 10
// accumulator = 10+20
// accumulator = 30
// accumulator = 30+30
// accumulator = 60
// accumulator = 60+40
// accumulator = 100
// accumulator = 100+50
// accumulator = 150
// const sum = arr.reduce((accumulator,num)=>{
//     return accumulator+num;
// },0);
// console.log(sum);


// multiplication
// jaise add function work kar rha waise hi karega
const arr = [10,20,30,40,50]
const mul = arr.reduce((shahbaz,num)=>{
    return shahbaz*num;
},1);
console.log(mul)
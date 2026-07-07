// const arr = [12, 34, 45, 67, 78];
// arr.sort((a,b)=>a-b);
// console.log(arr);
 


// we are create themself sorting function
// Bubble Sorting
// for(let i = 0 ; i<arr.length; i++){
//     for(let j = i;j<arr.length-1;j++){
//         if(arr[j]>arr[i+1]){
//             let temp = arr[j];
//             arr[j]=arr[j+1];
//             arr[j+1]=temp;
//         }

//     }
// }


// arr.sort((a,b)=>a-b);  yaha pe is function ka use dekhenge ye internally ye kaise working krta hai
//  is me mai do argument pass kara ha hu mai (a,b) andjo mera function hai jo arrow function hai ye check karega value chota hai ki bara hai 
//  a-b [ya] a<b  = -val (small value ) aya to swap nahi karna
//  a+b [ya] a>b  = +val (larger value ) aya to swap karna
//  yaha pe hamlog callback function ka use karenge 

// let arr = [10, 20, 40, 67, 89, 98, 56, 90, 33]
// arr.sorting = function(Callback){
    // for(let i = 0; i<arr.length;i++){
//         for(let j=0; j<arr.length-1;j++){
//             if(Callback(arr[j],arr[j+1])){
//                 let temp = arr[j];
//                 arr[j]=arr[j+1];
//                 arr[j+1]=temp;
//             }
//         }
//     }
// }
// arr.sorting((a,b)=> a>b);//  this is boolean style return akrta hai
// arr.sorting((a,b)=> a-b); // ye number return karta hai
// console.log(arr);
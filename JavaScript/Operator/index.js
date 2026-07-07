// console.log("Hello world");

// [let]  there is changes its is not const

// let name = "Shahbaz Ali";
// let age = 17;
// age = 39
// console.log(name,age);

// [const] there is no value changes its constant

// const s = 76;
// const ali = "shahbaz";
// console.log(s,ali);

//[var] it is old method it have dublicate variable declar and it is eassly access outside the scope
// var a = 39;
// var a = 36;
// console.log(a);

// if(true){
//     var a = 20;
// }

// function fun(){
//     var c = 30;
// }


//  Data type 
//   [i] primtive data type 
        //  Number , String  , Boolean ,  Undefined  , Null  , Bigint  , Symbol .
   
        // Number [any digital and Decimal number {floating number}]
        // let a = 56;
        // let b = 56.8;
        // console.log(a,b); 
        // console.log(typeof b); b kon si data type ka hai 


        // String  [Alphbet , Charicter ]
        // let c = "shahbaz";
        // let z = "shahbaz Ali";
        // console.log(c,z);
        //  console.log(typeof c); c kon si data type ka hai 

        //  Boolean [Ans give only True and False]
        // let login = true;
        // let f = false;
        // console.log(login ,f);
        //  console.log(typeof f); f kon si data type ka hai 

        // Undefined [aise catogery jha variable declear kiye ho waha value assigin nahi kiye ho]
        //   let user;
          // const p;   // show beacouse const call when you declar variable to assigin value
        //   console.log(user);  // undefine
        //  console.log(typeof user); user kon si data type ka hai 


        //    Null [ we can see variable me mai koii bhi value nahi dalna chata hu mai {that means intentional}]
        // let x = null;
        // console.log(x);
        //  x kon si data type hota hai [object] 
        //  console.log(typeof x);// x kon si data type hota hai [object] 

        // Bigint [big interger it is for lager number]
        // let d = 413243244324432443214414234n;
        // console.log(d);
        //  console.log(typeof d); // d kon si data type ka hai 

        // Symbol [it create unique value]
        // const id1 = Symbol("id");
        // const id2 = Symbol("id");
        // console.log(id1==id2); //not equal
        // console.log(id2);
        //  console.log(typeof id1); // id1 kon si data type ka hai 

//  [ii] Non primtive data type 
        // Array , Function , Object

        //  Array [it contain various data type]
        // let arr = [10, 10.34,"Shahbaz Ali"];
        // console.log(arr);


        // Object [its provides values name]
    //   let Uset = {
    //       name:"Shahbaz",
    //       account:12343455432,
    //       age:17,
    //       category:"gen"
    //   }

        //  Function
        // function add(){
        //     console.log("Hellow");
        // }
        // add();


        // NOTE function ko mai kisi variable ke ander store jara skta hu mai
        //  let f = function add(){
        //     console.log("Hellow");
        // }
        //   console.log(f); // output [Function: add]
        //  s();  aise function ko call kara // output Hellow 


// primitive data type is immutable / not mainipulate  [not change memory location]
         // memory loation different hoga 10 and 20 ka 
        //  yaha memorey ke ander alag alag box banenge  10 and 20 but a jo hai bad me 20 kohi point karega
        // let a = 10;  
        // a = 20 ; 
        //let name = "Rohit";
       // name = "Mohan";
        // console.log(name[3]);  // output a 
        // name[0]="q"; // name ke ander add nahi hoga 
        // console.log(name);  


 //  Non primitive data type is mutable  [change memory location]


//  ARRAY  [we are eassily change value and memory location like new data add and delete]
//      let arr= [12 , 23 ,45 ,45, 6];
//      arr.push(100);
//      arr.pop();
//      arr[1]=20;
//      console.log(arr);


// Object 
let obj = {
        name:"shahbaz ali",
        age: 34,
        roll_no:45
}
let obj2 = obj;
obj2.age=35;
obj.name="mohan";
console.log(obj.age,obj.name,obj.roll_no);
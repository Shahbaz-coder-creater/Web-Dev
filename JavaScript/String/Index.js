// String

//  how to create string with various method
// const str1 = "shabaz"; 
// const str2 = 'shabaz'; 
// const str3 = `shabaz`;  // this is modern way inisilistion
// const str4= `tdrfhfg
// gdfgfhfhf`; 

// const day = 45;
// const str5 = `Diploma in computer engineering ${day}`; //${day} doller ke sign se access kar skta hu day ke valie ko string me 
//  console.log(str5);  // O/P = Diploma in computer engineering 45

// const str1 = `shahbaz`;
// console.log(str1.length) ;
// console.log(str1[0]) ;
// str1[2] = "a";
// console.log(str1);

//  Upper case
// const str1 = `shahbaz`;
// console.log(str1.toUpperCase());
//  LOWER case
// const str2 = `SHAHBAZ ALI`;
// console.log(str2.toLowerCase());

// const str2 = ` ALI SHAHBAZ ALI`;
 //console.log(str2.indexOf(`HBAZ`));
 //console.log(str2.includes(`Had`)); // O/P TRUE AND FALSE 
 //console.log(str2.indexOf(`ALI`));  // 1 INDEX // MULTIPLE VALUE HO SAME NAME KE HO TO WAHA STATING INDEX VALUE RETURN KAREGA 
//  console.log(str2.lastIndexOf(`ALI`)); //LAST INDEX 13 O/P milega 


// const str2 = `SHAHBAZ ALI`;
// console.log(str2.slice(4.8));
// console.log(str2.slice(2)); // starting 2 index nikal do jo bacha o return kar do
//console.log(str2.slice(-2)); //right se 2 element utho aur return kar do  

// const str2 = `SHAHBAZ ALI`;
// console.log(str2.substring(2,5));

// const a = "Shahabaz";
// const b = "Ali";
// console.log(a+b);
// console.log(a+" "+b);
// const c = a+" "+b;
// console.log(c);
// console.log(10+30+"shahbaz"); // o/p 40shahbaz

//const str2 = ` ALI SHAHBAZ ALI`;
//console.log(str2.replace(`AL` , `all`)); // strtaing me jo element mila usko change kar ke de dega
//console.log(str2.replaceAll(`AL` , `all`)); // jaha pe AL hai wha pe sab ko change kar dega 


// const name = " Shahbaz Ali ";  //  last and end me jo space diyahu mai 
// console.log (name);
// console.log(name.trim()); // is space ki hat deta hai 

// const name = "Rohit,Mohit,Suraj,Rohan,Angali";
// const name1 = "Rohit Mohit Suraj Rohan Angali";
// console.log(name.split(" "));
// console.log(name1.split(","));



//  Date   [apne system se date and time day nikal skte hai  kaise nikal le lage]
// const now = new Date();
 // console.log(now);    // it give UTC timing dega
// console.log(now.toString()); // tostring hamare system se time and date uthsyega o/p Mon Jun 08 2026 12:08:17 GMT+0530 (India Standard Time)
// console.log(now.toISOString());   // 2026-06-08T06:42:59.016Z
// console.log(now.toLocaleString()); // 8/6/2026, 12:12:59 pm

// console.log(now.getDay());
// console.log(now.getDate());
// console.log(now.getFullYear());
// console.log(now.getMonth());
// console.log(now.getHours());
// console.log(now.getMinutes());
// console.log(now.getSeconds());

//  How to create themself date
// days: Mon - tue (1 based)
//  Month: 0 , 1 start

// Year Month Date Hours Minute seciond Millisecond
// const now = new Date(2026,6,8,1,20,20,125);
// console.log(now);
// new technology per work kar rahe hai js wale date problem ko shahi kar ne ke leye us technology ka nam {charect tomperal}2026-07-07T19:50:20.125z upper me maine month ko 8 likha hu print huwa hai 7 yahi problem hai keyui ki is js wle ne isko sahi kiya to dikat a jayega jo aphle hi se wedsite and browser run akr arhae to isi lye mera   days: Mon - tue (1 based) Month: 0 , 1 start ye dekh skte hai 
// console.log(now.toString()); //is ko aise sahi akr skte ahi 


// Method 2 

//  [IMPORTANT] CONCEPT with UTC{UTC stands for Coordinated Universal Time. It is the primary international time standard used to regulate clocks, time zones, and scientific operations globally. }

//  TIME STAMP
// const now = Date.now()
// console.log(now); // O/P ye mileag 1780906782622 ye k date hai ye millisecond me hai[1ms=1000] and ye bar bar change hota rahega 

//  1780906782622 is value se mere ko date malum karan hai
const now = Date.now();
const dates = new Date(1780906782622);
console.log(dates); // ye milega O/P 2026-06-08T08:19:42.622Z 
console.log(dates.toString()); // Mon Jun 08 2026 13:49:42 GMT+0530 (India Standard Time)

// //  how to perform onclick operation 

// // const element = document.getElementById("Ali");
// // element.onclick = function() {
// // element.textContent = "Hellow shahbaz";
// // element.style.backgroundColor = "red";
// // }
 
// //  how to perform addEventListener operation  

// // element.addEventListener("click" , ()=>{
// // element.textContent = "Hellow shahbaz";
// // element.style.backgroundColor = "pink";    
// // })

// // element.addEventListener("dblclick" , ()=>{
// // element.textContent = "Hellow shahbaz";
// // element.style.backgroundColor = "pink";    
// // })


// // How to new elementcreate

// // const newElement = document.createElement("h2");
// // newElement.textContent = " kandhwaliya";
// // console.log(newElement);
// // //  newelement bana to liya ab kaha rakh na hai matlab DOM Connect karna hia 
// // const element = document.getElementById("Ali");
// // // element.after(newElement)
// // element.before(newElement)

// //  newelement ko class and div ka name kaise de 
// //    const newelement1 = document.createElement("h3");
// //    newelement1.textContent=("shahbaz ali");
// //    element.after(newelement1);
// //    newelement1.id = "fist";
// //    newelement1.className = "shah"

// // // ak div ya class ke multiple name de skte hai kuch aise 
// // newelement1.className = " shahbaz";
// // // ake bad ak aur class add kar na hai
// // newelement1.className += " container";  //ye old method ahi 
// // //  new method
// // newelement1.classList=("mohan")
// // newelement1.classList=("shohan")


// //  How to Get attribute
// // const link = document.getElementById("link");
// // console.log(link.getAttribute("href"));
// // console.log(newelement1.getAttribute("conatainer"));

// // //  how Set attribute
// // const link = document.getElementById("link");
// // link.setAttribute("href", "https://youtube.com");
// // // how to set attribute
// // newelement1.setAttribute("Piush" , 'Mohan')


// //  how to create multiple newelement and arrage the secmatic way like 
// // array , object

// //  simple way 

// //  how to create unorder list
// // const element = document.getElementById("link"); // sab se pahle select akro kon DOM ke object pe connect karan hai  
// // const ul = document.createElement("ul");  // usko bad jo tum he create karan hai use create hai karo 
// // element.after(ul);  // element ko ko se object ke bad rakhna hai 
// // const li = document.createElement("li");
// // ul.append(li);  // append means bich me 
// // li.textContent="shahbaz ali";




// //  how to create unorder list is ko arry ke form me slect karte hai 
// const element = document.getElementById("link"); // sab se pahle select akro kon DOM ke object pe connect karan hai  
// const ul = document.createElement("ul");  // usko bad jo tum he create karan hai use create hai karo 
// element.after(ul);   
// // const li = document.createElement("li");
// // ul.append(li);  // append means bich me 
// // li.textContent="shahbaz ali";

// //    multiple data ko UL ke ander dale hai ak array ke form me
// const Name = ["Shahbaz Ali","Arbaz Ali","Sartaz Ali","Sahista Nahid","Sajida Khatoon","Fazle Haque","Sarfaraj Ali"];
// const frag = document.createDocumentFragment();
// // const arr = [];
// for(const family of Name ){
//    const li = document.createElement("li");
//    li.textContent = family;
//    // arr.push(li);
//    frag.append(li);
// }
//    // ul.append(...arr);
//    ul.append(frag);
     


//    Project 1 



// const users = [   // people 
//   {
//     name: "Aarav Sharma",
//     age: 24,
//     photo: "https://randomuser.me/api/portraits/men/1.jpg"
//   },
//   {
//     name: "Priya Verma",
//     age: 22,
//     photo: "https://randomuser.me/api/portraits/women/2.jpg"
//   },
//   {
//     name: "Rahul Mehta",
//     age: 26,
//     photo: "https://randomuser.me/api/portraits/men/3.jpg"
//   },
//   {
//     name: "Sneha Kapoor",
//     age: 23,
//     photo: "https://randomuser.me/api/portraits/women/4.jpg"
//   },
//   {
//     name: "Karan Malhotra",
//     age: 28,
//     photo: "https://randomuser.me/api/portraits/men/5.jpg"
//   },
//   {
//     name: "Ananya Singh",
//     age: 21,
//     photo: "https://randomuser.me/api/portraits/women/6.jpg"
//   },
//   {
//     name: "Rohan Gupta",
//     age: 25,
//     photo: "https://randomuser.me/api/portraits/men/7.jpg"
//   },
//   {
//     name: "Neha Joshi",
//     age: 27,
//     photo: "https://randomuser.me/api/portraits/women/8.jpg"
//   },
//   {
//     name: "Aditya Raj",
//     age: 24,
//     photo: "https://randomuser.me/api/portraits/men/9.jpg"
//   },
//   {
//     name: "Isha Agarwal",
//     age: 22,
//     photo: "https://randomuser.me/api/portraits/women/10.jpg"
//   }
// ];

// const conatainer = document.querySelector(".container");

// // let arr = [];
// // // let shahbaz = function(people){

// // for(let i = 0 ; i<people.length; i++){
// //   //  Name ke liye
// // const Name = document.createElement("h1");
// // Name.textContent = people[i].name;

// //   // Age ke liye 
// // const Age = document.createElement("p");
// // Age.textContent = people[i].age;

// // //  image kel iye 
// // const img = document.createElement("img");
// // img.src =  people[i].photo;
// // // dive cretae
 
// // const card = document.createElement("div");
// // card.append(img,Name,Age);

// // arr.push(card);
// // }
// // conatainer.append(...arr);
// // // }

// // // shahbaz(users);




// // // Another way

// const arr = [];

// users.forEach((people)=>{
//     const name = document.createElement('h2');
//     name.textContent = `Name: ${people.name}`;

//     // age ke liye
//     const age = document.createElement('p');
//     age.textContent = `Age: ${people.age}`;
    

//     // create image
//     const image = document.createElement('img');
//     image.src = people.photo;

//     // create a card:

//     const card = document.createElement('div');
//     card.append(image,name,age);


//     // put this card into the root element
//     arr.push(card);
// })


// conatainer.append(...arr);


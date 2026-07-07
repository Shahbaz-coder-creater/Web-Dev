// Ye lo practice ke liye 20 objects ka array. Isme:
// 5 Books
// 5 Electronics
// 5 Clothes
// 5 Home Goods
// har object me name, price, category, instock, id hai

const products = [

    // Books
    { id: 1, name: "JavaScript Basics", price: 499, category: "Books", instock: true},
    { id: 2, name: "React Guide", price: 699, category: "Books", instock: true },
    {id: 3,name: "Node.js Complete",price: 799,category: "Books",instock: false},
    {id: 4,name: "Python Programming",price: 599,category: "Books",instock: true},
    {id: 5,name: "Data Structure",price: 899,category: "Books",instock: false},


    // Electronics
    {id: 6,name: "Laptop",price: 55000,category: "Electronics",instock: true},
    {id: 7,name: "Smartphone",price: 25000,category: "Electronics",instock: true},
    { id: 8, name: "Headphone",price: 1999, category: "Electronics", instock: false},
    {id: 9,name: "Keyboard",price: 1499,category: "Electronics",instock: true},
    {id: 10,name: "Smart Watch",price: 3999,category: "Electronics",instock: false},


    // Clothes
    {id: 11,name: "T-Shirt",price: 799,category: "Clothes",instock: true},
    {id: 12, name: "Jeans", price: 1599, category: "Clothes", instock: true },
    { id: 13, name: "Jacket", price: 2999, category: "Clothes", instock: false },
    { id: 14, name: "Shoes", price: 2499, category: "Clothes", instock: true },
    { id: 15, name: "Hoodie", price: 1299, category: "Clothes", instock: false },


    // Home Goods
    { id: 16, name: "Sofa", price: 25000, category: "Home Goods", instock: true },
    {id: 17,name: "Table",price: 5000,category: "Home Goods",instock: true},
    {id: 18,name: "Chair",price: 2500,category: "Home Goods",instock: false},
    {id: 19,name: "Lamp",price: 999,category: "Home Goods",instock: true},
    {id: 20,name: "Curtain",price: 1500,category: "Home Goods",instock: false}

];

// // ispe hamlog filter and map and reducer apply karege
// const shahbaz = products.filter((goods)=>goods.id); // filter() → kuch items select karke new array deta hai
// const ans = shahbaz.map((goods)=>({name:goods.name, category:goods.category,price:goods.price }));// map() → har item ko change karke new array deta hai
// console.log(ans);


// filter and map ko ak hi line me likhte hai 
const shahbaz = products.filter((goods)=>goods.id).map((goods)=>({name:goods.name, category:goods.category,price:goods.price }));
console.log(shahbaz);
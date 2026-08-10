import express from "express";
import { products}  from "./data.js";
const app = express();


    app.use(express.json());

// normal get
    app.get("/product",(req,res)=>{
        res.json(products)
    });

// Client mujhe ID request ki body me dega.
    app.get("/product", (req, res) => {
    const index = req.body.id; // Body isliye required hui kyunki tumne ID ko body se lene ka decision kiya hai.
    res.json(products[index - 1]);
});

// Tum ID ko URL me bhi de sakte ho.
//   [Route parameter ke through {:}]
// URL -> /product/2 -> req.params.id 
app.get("/product/:id",(req,res)=>{
    const ID = req.params.id;
    res.json(products[ID-1]);
})

// Query Parameter 
// [GET /product?id=2]
// URL -> /product?id=2 -> req.query.id
app.get("/product",(req,res)=>{
    const id = req.query.id;
    res.json(products[id-1]);
})

//  Better Aproch
app.get("/product/:id",(req,res)=>{
    const id = Number(req.params.id);
    const product = products.find(iteam => iteam.id === id)
    if(product){
      res.json(product);
    }else{
        res.send("Product is not found");
    }
    
})

// filter data by query parameter
app.get("/product",(req,res)=>{
    const {price,rating,inStock} = req.query;
    let filterproduct = products;

    if(price){
        filterproduct=filterproduct.filter((product) =>{
            return product.price <= Number(price);
        });  
    }
    if(rating){
        filterproduct=filterproduct.filter((product) =>{
            return product.rating>=rating;
            });
    }
    if(inStock){
        filterproduct=filterproduct.filter((product) =>{
            return product.inStock === (inStock==="true");

        });
    }
    res.json(filterproduct);
})

app.get("/products", (req, res) => {
    const category = req.query.category;
    if (category) {
        const filteredProducts = products.filter(
            product => product.category === category
        );
        return res.json(filteredProducts);
    }
    res.json(products);
});

app.post("/product",(req,res)=>{
    const data = req.body;
    products.push[data];
   res.send(req.body);
})


//  data ko partially Update karna[matlab ak specific part ko change akrna hota hia ]
app.patch('/product',(req,res)=>{
    const data = req.body;
    const fetchID = products.find((p)=> p.id == data.id);
    if(fetchID){
        Object.assign(fetchID,data);
        res.send("Data is update succesfully");
    }else{
        res.send("Data is not Found");
    }
})

// data ko complete update karna dena
// [Note] there is give id to Url nad not given to Body
app.put("/product/:id",(req,res)=>{
    const Id = Number(req.params.id);

    const index = products.findIndex((p)=>p.id===Id);

    if(index === -1){
        return res.send("Product is not found");
    }else{
//         // yaha pe mai data ko body me bhej rahahu mai
     products[index] = {
    id: products[index].id,
    name: req.body.name,
    price: req.body.price,
    category: req.body.category
     };

   res.json(products[index]);
    }
})
  

// yaha pe hamlog direct body me data bhej de rahae hai note point ya pe mai id bhi body ke nader bhej rah hu mai
app.put("/product", (req, res) => {
    const id = req.body.id;
    const index = products.findIndex((p) => p.id === id);
    if (index === -1) {
        return res.send("Product is not found");
    } else{
    products[index] = req.body;
    res.json(products[index]);
     }
});


// Tumhare DELETE code me bas pop() ki jagah splice(index, 1) karna main correction hai.
app.delete("/product/:id", (req, res) => {
    const ID = Number(req.params.id);
    const index = products.findIndex((p) => p.id === ID);
    if (index === -1) {
        return res.send("Id is not found");
    }
    products.splice(index, 1);
    res.send("Data is deleted successfully");
});
app.listen(3000,()=>{
    console.log("I am listning at port 3000");
})
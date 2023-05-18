const express = require("express");
const app = express();
const port = 3000;
const path = require("path");
const mongoose = require("mongoose");

const Product = require("./models/product");

main().catch(err => console.log(err));
async function main() {
    await mongoose.connect('mongodb://127.0.0.1:27017/farmStand');
    console.log("Mongo connection open")
  };

app.set("views", path.join(__dirname, "views"));
app.set("view engine", "ejs");
// linea 18 necesaria para pasear info del post
app.use(express.urlencoded({extended:true}))

app.get("/", (req, res) => {
    // send envía eso, render carga ejs
    res.send("<h1>Home</h1>")
    console.log("This is the home page, now move to other route")
})
app.get("/products", async (req, res) => {
    // const products es un .thenable así que de igual manera puede ser una funcion async que busca en la database todo lo que hay, por eso primero buscara antes de hacer nada
    const products = await Product.find({}); 
   
    // no hace falta /views ya que render tiene el .set "views" y el path.join, 2do parametro pasa la lista a ejs
    res.render("./products/index", {products})
})

app.get("/products/new", (req, res)=> {
    res.render("products/new");
})

app.post("/products", async (req, res) => {
    // console.log(req.res) -> cuando haya submit logeara la info
    const newProduct = new Product(req.body);
    await newProduct.save();
    res.redirect(`/products/${newProduct._id}`);
})

app.get("/products/:id", async (req, res)=> {
    try {
        // recuerda que el id se encuentra en los params
        const {id} = req.params;
        const foundProduct = await Product.findById(id);
        console.log(foundProduct);
        res.render("products/details", {foundProduct});
    } catch (error) {
        res.send("<h1>ID NOT FOUND</h1>")
    }
})

app.get("/products/:id/edit", async (req, res)=> {
    const foundProduct = await Product.findById(id);
    res.render("products/edit", {foundProduct});
})

app.listen(port, () => {
    console.log("Listening on port 3000")
});



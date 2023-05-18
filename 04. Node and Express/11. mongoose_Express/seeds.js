const mongoose = require("mongoose");
const Product = require("./models/product");

main().catch((err) => console.log(err));
async function main() {
  await mongoose.connect("mongodb://127.0.0.1:27017/farmStand");
  console.log("Mongo connection open");
}

/*
===== Para crear una instancia ======
const ruby = new Product({
    name: "Ruby Grapefruit",
    price: 1.99,
    category: "fruit"
})
ruby.save()
    .then(ruby => console.log(ruby))
    .catch(e => console.log(e))


===== 
Para crear mas instancias sustituir este codigo con otros valores o bien usar insertMany() como abajo
=====
*/

// si da error - vetegable o usar "" en el numero ya que es type number - saltara error de validacion y no se insertara nada
const seedProducts = [
  {
    name: "Fairy Eggplant",
    price: 1.00,
    category: "vegetable",
  },
  {
    name: "Organic Goddess Melon",
    price: 4.99,
    category: "fruit",
  },
  {
    name: "Organic Mini Seedless Watermelon",
    price: 3.99,
    category: "fruit",
  },
  {
    name: "Organic Celery",
    price: 1.50,
    category: "vegetable",
  },
  {
    name: "Chocolate Whole Milk",
    price: 2.69,
    category: "dairy",
  },
];

Product.insertMany(seedProducts)
  .then((res) => console.log(res))
  .catch((e) => console.log(e));

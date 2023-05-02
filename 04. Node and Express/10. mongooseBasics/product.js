const mongoose = require("mongoose");
main().catch(err => console.log(err));

async function main() {
    await mongoose.connect('mongodb://127.0.0.1:27017/shopApp');
    console.log("connection open")
  }

  const productSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true
    },
    price: {
        type: Number,
        min: 0,
        required: true
    },
    onSale:{
        type: Boolean,
        default: false
    },
    categories: [String],
    qty: {
        online: {
            type: Number,
            default: 0
        },
        store: {
            type: Number,
            default: 0
        }
    }
  });

  const Product = mongoose.model("Product", productSchema);

//   const bike = new Product({ name: "Mountain Bike", price: 999, categories: ["cycling"] })
//   bike.save()
//         .then(data => {
//             console.log(data)
//         })
//         .catch(error => {
//             console.log(error)
//         })

// actualizar producto
// primero crearlo y comentarlo para que no se duplique más veces
/*
const pump = new Product({ name: "Tire pump", price: 19.99, categories: ["cycling"] })
pump.save()
.then(data => console.log(data))
.catch(err => console.log(err));
*/

// actualizarlo
// regex busca algo que haga match con el nombre
// mongoose no necesita $set para updatear
// al poner new:true y hacer el console log saldra la version actualizada
Product.findOneAndUpdate({ name: {$regex: "Tire"}}, {price: 100}, {new: true})
.then(data => console.log(data))
.catch(err => console.log(err))

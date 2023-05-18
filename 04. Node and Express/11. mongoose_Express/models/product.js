// se requiere mongoose para poder hacer modelos, pero no hace falta conectar la db porque los modelos se requeriran en el archivo principal, que si esta conectado a la db
const mongoose = require("mongoose");

const productSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true
    },
    price: {
        type: Number,
        required: true,
        min: 0
    },
    category: {
        type: String,
        lowercase: true,
        enum: ["fruit", "vegetable", "dairy"]
    }
});

const Product = mongoose.model("Product", productSchema);

module.exports = Product;
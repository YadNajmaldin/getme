const mongoose = require("mongoose")
const productSchema = new mongoose.Schema(
    {
    name: String,
    img: String,
    description: String,
    price: Number,
    qty: Number
}
)
const Product = mongoose.model("Product", productSchema)
module.exports = Product
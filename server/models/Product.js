const mongoose = require("mongoose")

const ProductSchema = new mongoose.Schema({
    title: {
        type: String,
        required: [true, "All products must have a title!"],
        minlength: [1, "Product title must be longer than 1 character!"]
    },
    price: {
        type: Number,
        required: [true, "All Products must have a price!"],
        min: [0.00, "Price must be above $0.00."]
    },
    description: {
        type: String,
        required: [true, "All products must have a description!"]
    }
}, {timestampes: true})

module.exports = mongoose.model("Product", ProductSchema);
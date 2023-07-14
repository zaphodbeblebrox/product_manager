const Product = require("../models/Product");

module.exports.findAllProducts = (req, res) => {
    Product.find()
        .then(allProducts => res.json({products: allProducts}))
        .catch(err => console.log(err));
}

module.exports.findOneProduct = (req, res) => {
    Product.findById({_id: req.params.id})
        .then(oneProduct => res.json({products: oneProduct}))
        .catch(err => console.log(err));
}

module.exports.createProduct = (req, res) => {
    Product.create(req.body)
        .then(newProduct => res.json({products: newProduct}))
        .catch(err => console.log(err));
}

module.exports.updateProduct = (req, res) => {
    Product.findByIdAndUpdate(
        {_id: req.params.id}, 
        req.body, 
        {new: true, runValidators: true}
        )
        .then(updatedProduct => res.json({products: updatedProduct}))
        .catch(err => console.log(err));
}

module.exports.deleteProduct = (req, res) => {
    Product.findByIdAndDelete({_id: req.params.id})
        .then(results => res.json({result: results}))
        .catch(err => console.log(err));
}
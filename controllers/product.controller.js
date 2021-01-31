var productModel = require("../models/product")

var productController = {
    addProduct: (req, res) => {
        var product = new productModel(req.body);
        product.save((err) => {
            if (err) {
                res.status(500)
                res.send("Failed to add" + err); rs
            }
            else {
                res.status(200);
                res.end("Successfully added");
            }
        });
    },
    updateProduct: (req, res) => {
        productModel.findByIdAndUpdate(req.params.id, req.body, { new: true }, (err, todo) => {
            if (err) {
                res.status(500);
                res.end("Failed to Update");
            }
            if (!todo) {
                res.status(404)
                res.end("product does not exist")
            }
            else {
                res.status(200);
                res.json(todo);
            }
        });
    },
    deleteProduct: (req, res) => {
        productModel.findByIdAndRemove(req.params.id, req.body, { new: true }, (err, todo) => {
            if (err) {
                res.status(500);
                res.end("Failed to Update");
            }
            if (!todo) {
                res.status(404)
                res.end("product does not exist")
            }
            else {
                res.status(200);
                res.json(todo);
            }
        });
    },
    allProducts: (req, res) => {
        productModel.find({}).exec(function (error, results) {
            if (error) {
                return next(error);
            }
            res.json(results);
        });
    }
}
module.exports = productController
var categoryModel = require("../models/category")

var categoryController = {
    addCategory: (req, res) => {
        var category = new categoryModel(req.body);
        category.save((err) => {
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
    updateCategory: (req, res) => {
        categoryModel.findByIdAndUpdate(req.params.id, req.body, { new: true }, (err, todo) => {
            if (err) {
                res.status(500);
                res.end("Failed to Update");
            }
            if (!todo) {
                res.status(404)
                res.end("category does not exist")
            }
            else {
                res.status(200);
                res.json(todo);
            }
        });
    },
    deleteCategory: (req, res) => {
        categoryModel.findByIdAndRemove(req.params.id, req.body, (err, todo) => {
            if (err) {
                res.status(500);
                res.end("Failed to Update");
            }
            if (!todo) {
                res.status(404)
                res.end("category does not exist")
            }
            else {
                res.status(200);
                res.json(todo);
            }
        });
    },
    allCategorys: (req, res) => {
        categoryModel.find({}).exec(function (error, results) {
            if (error) {
                return next(error);
            }
            res.json(results);
        });
    }
}
module.exports = categoryController
var blogModel = require("../models/blog")

var blogController = {
    addBlog: (req, res) => {
        var blog = new blogModel(req.body);
        blog.save((err) => {
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
    updateBlog: (req, res) => {
        blogModel.findByIdAndUpdate(req.params.id, req.body, { new: true }, (err, todo) => {
            if (err) {
                res.status(500);
                res.end("Failed to Update");
            }
            if (!todo) {
                res.status(404)
                res.end("blog does not exist")
            }
            else {
                res.status(200);
                res.json(todo);
            }
        });
    },
    makePublic: (req, res) => {
        blogModel.findByIdAndUpdate(req.params.id, { $set: { "isPublic": true } }, { new: true }, (err, todo) => {
            if (err) {
                res.status(500);
                res.end("Failed to Update");
            }
            if (!todo) {
                res.status(404)
                res.end("blog does not exist")
            }
            else {
                res.status(200);
                res.json(todo);
            }
        });
    },
    makePrivate: (req, res) => {
        blogModel.findByIdAndUpdate(req.params.id, { $set: { "isPublic": false } }, { new: true }, (err, todo) => {
            if (err) {
                res.status(500);
                res.end("Failed to Update");
            }
            if (!todo) {
                res.status(404)
                res.end("blog does not exist")
            }
            else {
                res.status(200);
                res.json(todo);
            }
        });
    },
    deleteBlog: (req, res) => {
        blogModel.findByIdAndRemove(req.params.id, req.body, { new: true }, (err, todo) => {
            if (err) {
                res.status(500);
                res.end("Failed to Update");
            }
            if (!todo) {
                res.status(404)
                res.end("blog does not exist")
            }
            else {
                res.status(200);
                res.json(todo);
            }
        });
    },
    allBlogs: (req, res) => {
        blogModel.find({}).exec(function (error, results) {
            if (error) {
                return next(error);
            }
            res.json(results);
        });
    },
    blogCategory: (req, res) => {
        blogModel.find({}).exec(function (error, results) {
            if (error) {
                return next(error);
            }
            res.json(results);
        });
    }
}
module.exports = blogController
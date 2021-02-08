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
    allBlog: (req, res) => {
        blogModel.find({}).exec(function (error, results) {
            if (error) {
                return next(error);
            }
            res.json(results);
        });
    },
   
    allBlogsEng: (req, res) => {
        blogModel.find({}).select({ 'name': 1, 'category': 1 , 'contentEng': 1 , 'img':1, 'date': 1, 'isPublic': 1}).exec(function (error, results) {
            if (error) {
                return next(error);
            }
            res.json(results);
        });
    },
    allBlogsUrdu: (req, res) => {
        blogModel.find({}).select({ 'name': 1, 'category': 1 , 'contentUrdu': 1 , 'img':1, 'date': 1, 'isPublic': 1}).exec(function (error, results) {
            if (error) {
                return next(error);
            }
            res.json(results);
        });
    },
    allBlogCategory: (req, res) => {
        blogModel.find({"category._id.oid" : req.params.id }).exec(function (error, results) {
            if (error) {
                return next(error);
            }
            res.json(results);
        });
    },
    blogCategoryEng: (req, res) => {
        blogModel.find({"category._id.oid" : req.params.id }).select({ 'name': 1, 'category': 1 , 'contentEng': 1 , 'img':1, 'date': 1, 'isPublic': 1}).exec(function (error, results) {
            if (error) {
                return next(error);
            }
            res.json(results);
        });
    },
    blogCategoryUrdu: (req, res) => {
        blogModel.find({"category._id.oid" : req.params.id }).select({ 'name': 1, 'category': 1 , 'contentUrdu': 1 , 'img':1, 'date': 1, 'isPublic': 1}).exec(function (error, results) {
            if (error) {
                return next(error);
            }
            res.json(results);
        });
    }
}
module.exports = blogController

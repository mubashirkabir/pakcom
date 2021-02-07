var userModel = require("../models/user")
var notificationModel = require("../models/notification")
var crypto = require('crypto');


var userController = {
    signup: (req, res) => {
        var user = new userModel(req.body);
        var notification = new notificationModel();
        user.password = calculatesHash(user.password);
        notification.notificationFor = "admin";
        notification.notificationType = "userApproval";
        res.send(user);
        user.save(function (err, user) {
            if (err) {
                res.status(500)
                res.send("Failed to add" + err);
            }
            else {
                notification.notificationLinkId = user;
                notification.save(function (err, notification) {
                    res.status(200);
                    res.end("Successfully added");
                });
            }
        });
    },

    updateUser: (req, res) => {
        userModel.findByIdAndUpdate(req.params.id, req.body, { new: true }, (err, todo) => {
            if (err) {
                res.status(500);
                res.end("Failed to Update");
            }
            if (!todo) {
                res.status(404)
                res.end("user does not exist")
            }
            else {
                res.status(200);
                res.json(todo);
            }
        });
    },
    approveUser:  (req, res) => {
        userModel.findByIdAndUpdate(req.params.id, {$set: { 'status': 'active'} }, { new: true }, (err, todo) => {
            if (err) {
                res.status(500);
                res.end("Failed to Update");
            }
            if (!todo) {
                res.status(404)
                res.end("user does not exist")
            }
            else {
                res.status(200);
                res.json(todo);
            }
        });
    },
    deleteUser: (req, res) => {
        userModel.findByIdAndRemove(req.params.id, req.body, { new: true }, (err, todo) => {
            if (err) {
                res.status(500);
                res.end("Failed to Update");
            }
            if (!todo) {
                res.status(404)
                res.end("user does not exist")
            }
            else {
                res.status(200);
                res.json(todo);
            }
        });
    },
    getUser: (req, res) => {
        userModel.find({ $or: [{ name: req.params.query }, { phoneNumber: req.params.query }, { email: req.params.query }] }).exec(function (error, results) {
            if (error) {
                return next(error);
            }
            res.json(results);
        });
    },
    allUsers: (req, res) => {
        userModel.find({}).exec(function (error, results) {
            if (error) {
                return next(error);
            }
            res.json(results);
        });
    }
}

function calculatesHash(password) {
    return crypto.createHash('md5').update(password).digest('hex');
}
module.exports = userController
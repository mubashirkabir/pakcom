var notificationModel = require("../models/notification")

var notificationController = {
    allNotifications: (req, res) => {
        notificationModel.find({}).exec(function (error, results) {
            if (error) {
                return next(error);
            }
            res.json(results);
        });
    },
    adminNotifications: (req, res) => {
        notificationModel.find({"notificationFor" : "admin"}).exec(function (error, results) {
            if (error) {
                return next(error);
            }
            res.json(results);
        });
    },
    userNotifications: (req, res) => {
        notificationModel.find({"notificationFor" : "user"}).exec(function (error, results) {
            if (error) {
                return next(error);
            }
            res.json(results);
        });
    },
    approvalNotifications: (req, res) => {
        notificationModel.find({"notificationType" : "userApproval"}).exec(function (error, results) {
            if (error) {
                return next(error);
            }
            res.json(results);
        });
    },
    screenshotNotifications: (req, res) => {
        notificationModel.find({"notificationType" : "userScreenshot"}).exec(function (error, results) {
            if (error) {
                return next(error);
            }
            res.json(results);
        });
    },
    addScreenshotNotification: (req, res) => {
        var notification = new notificationModel(req.body);
        notification.notificationType = "userScreenshot";
        notification.save((err) => {
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
    blogsNotifications: (req, res) => {
        notificationModel.find({ $or: [{ "notificationType": "blog Added" }, { "notificationType": "blog Updated" }] }).exec(function (error, results) {
            if (error) {
                return next(error);
            }
            res.json(results);
        });
    },
    ratesNotifications: (req, res) => {
        notificationModel.find({ "notificationType": "rate"  }).exec(function (error, results) {
            if (error) {
                return next(error);
            }
            res.json(results);
        });
    }
}
module.exports = notificationController

var notificationController = require('../controllers/notification.controller')
var express = require('express');
var router = express.Router();

router.get('/allnotifications/', notificationController.allNotifications); // get all notifications
router.get('/adminNotifications/', notificationController.adminNotifications);// get all notifications for admin
router.get('/userNotifications/', notificationController.userNotifications);// get all notifications for user (subscribed)
router.get('/approvalNotifications/', notificationController.approvalNotifications);// get all notifications for user account approval
router.get('/blogsNotifications/', notificationController.blogsNotifications);// get all notifications for blog for user (subscribed)
router.get('/ratesNotifications/', notificationController.ratesNotifications);// get all notifications for rates updated/added for user (subscribed)
router.get('/screenshotNotifications/', notificationController.screenshotNotifications);// get all notifications for admin 
router.post('/addScreenshotNotification', notificationController.addScreenshotNotification);//add notification if any screenshot is taken by user on post

module.exports = router;

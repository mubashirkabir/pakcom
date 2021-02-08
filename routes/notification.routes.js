var notificationController = require('../controllers/notification.controller')
var express = require('express');
var router = express.Router();

router.get('/allnotifications/', notificationController.allNotifications);
router.get('/adminNotifications/', notificationController.adminNotifications);
router.get('/approvalNotifications/', notificationController.approvalNotifications);
router.get('/blogsNotifications/', notificationController.blogsNotifications);

module.exports = router;
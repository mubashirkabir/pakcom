var mongoose = require('mongoose');

var notificationSchema = new mongoose.Schema({
    notificationFor: {
        //For subscribed user or admin
        type: String
    },
    date: {
        type: Date,
        default: Date.now
    },
    notificationType:{
        //For user approval, blog and screenshot
        type: String
    },
    notificationLinkId:{
        //would hold id, 
        type: String
    }

});

var notification = mongoose.model('notification', notificationSchema);

module.exports = notification;
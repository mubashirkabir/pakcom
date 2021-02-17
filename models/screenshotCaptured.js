var mongoose = require('mongoose');

var screenshotSchema = new mongoose.Schema({
    user: {
        type: Object
    },
    post: {
        type: Object
    }
});

var screenshot = mongoose.model('screenshot', screenshotSchema);

module.exports = screenshot;
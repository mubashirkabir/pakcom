var mongoose = require('mongoose');

var planSchema = new mongoose.Schema({
    planId: {
        type: String
    },
    planName: {
        type: String
    },
    planDuration: {
        type: String
    },
    planPrice: {
        type: String
    }
});

var plan = mongoose.model('plan', planSchema);

module.exports = plan;
var mongoose = require('mongoose');

var planSchema = new mongoose.Schema({
    planName: {
        type: String
    },
    planDuration: {
        //in months
        type: Number
    },
    planPricePKR: {
        type: String
    },
    planPriceUSD: {
        type: String
    },
    planDescription: {
        type: String
    }
});

var plan = mongoose.model('plan', planSchema);

module.exports = plan;
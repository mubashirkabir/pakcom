var mongoose = require('mongoose');

var ratesSchema = new mongoose.Schema({
    product: {
        type: Object
    },
    location: {
        type: Object
    },
    category: {
        type: Object
    },
    descriptionEng: {
        type: String
    },
    descriptionUrdu: {
        type: String
    },
    date: {
        type: Date,
        default: Date.now
    },
    rate: {
        type: Number,
        default: 0
    },
    percentage: {
        type: String
    },
    sequence: {
        type: Number
    }
});

var rates = mongoose.model('rates', ratesSchema);

module.exports = rates;
var mongoose = require('mongoose');

var ratesOldSchema = new mongoose.Schema({
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
        required: true
    },
    rate: {
        type: Number,
        default: 0
    },
    percentage: {
        type: String,
        default: 0
    }
});

var ratesOld = mongoose.model('ratesOld', ratesOldSchema);

module.exports = ratesOld;
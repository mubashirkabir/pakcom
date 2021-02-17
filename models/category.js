var mongoose = require('mongoose');

var categorySchema = new mongoose.Schema({
    categoryNameEng: {
        type: String
    },
    categoryNameUrdu: {
        type: String
    }
});

var category = mongoose.model('category', categorySchema);

module.exports = category;
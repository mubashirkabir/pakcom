var mongoose = require('mongoose');

var productSchema = new mongoose.Schema({
    productNameEng: {
        type: String
    },
    productNameUrdu: {
        type: String
    },
    productCategory: {
        type: Object,
    }
});

var product = mongoose.model('product', productSchema);

module.exports = product;
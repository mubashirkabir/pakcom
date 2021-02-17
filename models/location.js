var mongoose = require('mongoose');

var locationSchema = new mongoose.Schema({
    locationNameEng: {
        type: String
    },
    locationNameUrdu: {
        type: String
    },
    type:{
        type: Number
    }
});

var location = mongoose.model('location', locationSchema);

module.exports = location;
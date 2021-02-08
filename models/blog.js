var mongoose = require('mongoose');

var blogSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true,
    },
    category: {
        type: Object
    },
    content: {
        type: String,
        required: true,
    },
    img: {
        type: String
    },
    date: {
        type: Date
    },
    isPublic: {
        type: Boolean
    }
});

var blog = mongoose.model('blog', blogSchema);

module.exports = blog;


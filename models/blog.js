var mongoose = require('mongoose');

var blogSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true,
    },
    category: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'category'
    },
    content: {
        type: String,
        required: true,
    },
    img: {
        data: Buffer,
        contentType: String
    },
    date: {
        type: String
    }
});

var blog = mongoose.model('blog', blogSchema);

module.exports = blog;


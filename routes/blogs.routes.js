var blogController = require('../controllers/blog.controllers')
var express = require('express');
var router = express.Router();

router.post('/addblog', blogController.addBlog);
router.get('/allblog/', blogController.allBlogs);
router.put('/updateblog/:id', blogController.updateBlog);
router.put('/makePublic/:id', blogController.makePublic);
router.put('/makePrivate/:id', blogController.makePrivate);
router.delete('/deleteblog/:id', blogController.deleteBlog);

module.exports = router;
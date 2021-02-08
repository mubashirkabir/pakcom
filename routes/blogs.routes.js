var blogController = require('../controllers/blog.controllers')
var express = require('express');
var router = express.Router();

router.post('/addblog', blogController.addBlog);
router.get('/allblog/', blogController.allBlog); //will return eng & urdu 
router.get('/allblog/:id', blogController.allBlogCategory);  // will return eng + urdu w.r.t category
router.get('/allblogeng/', blogController.allBlogsEng); // will return only eng content
router.get('/allblogurdu/', blogController.allBlogsUrdu);// will return only urdu content
router.get('/blogcategorycng/:id', blogController.blogCategoryEng);// will return only eng content w.r.t category
router.get('/blogcategoryurdu/:id', blogController.blogCategoryUrdu);// will return only urdu content w.r.t category
router.put('/updateblog/:id', blogController.updateBlog);
router.put('/makePublic/:id', blogController.makePublic);
router.put('/makePrivate/:id', blogController.makePrivate);
router.delete('/deleteblog/:id', blogController.deleteBlog);

module.exports = router;

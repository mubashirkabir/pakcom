var categoryController = require('../controllers/category.controller')
var express = require('express');
var router = express.Router();

router.post('/addCategory', categoryController.addCategory);
router.get('/allCategory/', categoryController.allCategorys);
router.put('/updateCategory/:id', categoryController.updateCategory);
router.delete('/deleteCategory/:id', categoryController.deleteCategory);

module.exports = router;

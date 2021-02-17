var productController = require('../controllers/product.controller')
var express = require('express');
var router = express.Router();

router.post('/addproduct', productController.addProduct);
router.get('/allProducts/', productController.allProducts);
router.get('/allcategoryProducts/:categoryId', productController.allCategoryProducts);
router.put('/updateProduct/:id', productController.updateProduct);
router.delete('//:id', productController.deleteProduct);

module.exports = router;
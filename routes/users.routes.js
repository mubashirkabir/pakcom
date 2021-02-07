var productController = require('../controllers/user.controller')
var express = require('express');
var router = express.Router();

router.post('/signup', productController.signup); 
router.get('/allUsers/', productController.allUsers);
router.get('/getuser/:query', productController.getUser);
router.put('/updateUser/:id', productController.updateUser);
router.delete('/deleteUser/:id', productController.deleteUser);

module.exports = router;
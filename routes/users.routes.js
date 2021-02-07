var productController = require('../controllers/user.controller')
var express = require('express');
var router = express.Router();

router.post('/signup', productController.signup); 
router.get('/allusers/', productController.allUsers);
router.get('/getuser/:query', productController.getUser);
router.get('/pendingaccounts', productController.pendingAccount);
router.get('/expiredaccounts', productController.expiredAccount);
router.get('/activeaccounts', productController.activeAccount);
router.put('/approveuser/:id', productController.approveUser);
router.put('/updateuser/:id', productController.updateUser);
router.delete('/deleteuser/:id', productController.deleteUser);

module.exports = router;

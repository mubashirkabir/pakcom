var ratesController = require('../controllers/rates.controller')
var express = require('express');
var router = express.Router();

router.post('/addRate', ratesController.addRates);
router.get('/allRates/', ratesController.allRates);
router.get('/categoryRates/:category', ratesController.allCategoryRates);
router.get('/getoldrates/', ratesController.getOldRates);
router.put('/updateRate/:id', ratesController.updateRates);
router.put('/updateSequence/:id/:otherid', ratesController.updateSequence);
router.delete('/deleteRate/:id', ratesController.deleteRates);

module.exports = router;

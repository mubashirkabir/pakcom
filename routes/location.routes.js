var locationController = require('../controllers/location.controller')
var express = require('express');
var router = express.Router();

router.post('/addLocation', locationController.addLocation);
router.get('/allLocations/', locationController.allLocations);
router.put('/updateLocation/:id', locationController.updateLocation);
router.delete('/deleteLocation/:id', locationController.deleteLocation);

module.exports = router;
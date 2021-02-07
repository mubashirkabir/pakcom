var planController = require('../controllers/plan.controller')
var express = require('express');
var router = express.Router();

router.post('/addplan', planController.addPlan);
router.get('/allplans/', planController.allPlan);
router.get('/getplan/:id', planController.getPlan);
router.put('/updateplan/:id', planController.updatePlan);
router.delete('/deleteplan/:id', planController.deletePlan);

module.exports = router;
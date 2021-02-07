var ratesModel = require("../models/rates");
var ratesOldModel = require("../models/ratesOld");
var Promise = require("promise");

var ratesController = {
    addRates: (req, res) => {
        var category = req.body.category;
        countDocument(category).then(
            function (sucess) {
                var rates = new ratesModel(req.body);
                rates.sequence = sucess;
                rates.save((err) => {
                    if (err) {
                        res.status(500)
                        res.send("Failed to add" + err); rs
                    }
                    else {
                        res.status(200);
                        res.end("Successfully added");
                    }
                });
            });
    },
    updateRates: (req, res) => {
        req.body.date = Date.now();
        ratesModel.findById(req.params.id).exec(function (error, results) {
            if (error) {
                return next(error);
            }
            var ratesOld = copyObject(results);
            ratesOld.save((err) => {
                if (err) {
                    console.log("rate updating failed while deleting")
                }
            });
        });
        ratesModel.findByIdAndUpdate(req.params.id, req.body, { new: true }, (err, todo) => {
            if (err) {
                res.status(500);
                res.end("Failed to Update");
            }
            if (!todo) {
                res.status(404)
                res.end("rates does not exist")
            }
            else {
                res.status(200);
                res.json(todo);
            }
        });
    },
    deleteRates: (req, res) => {
        getSequenceAndUpdateInDb(req.params.id).then(
            function (success) {
                updateSequence(success.sequence, success.category).then(
                    function (success1) {
                        console.log(success1);
                        ratesModel.findByIdAndRemove(req.params.id, (err, todo) => {
                            if (err) {
                                res.status(500);
                                res.end(err + "Failed to Update");
                            }
                            if (!todo) {
                                res.status(404)
                                res.end("rates does not exist")
                            }
                            else {
                                res.status(200);
                                res.json(todo);
                            }
                        });
                    }
                );
            });
    },
    allRates: (req, res) => {
        ratesModel.find({}).exec(function (error, results) {
            if (error) {
                return next(error);
            }
            res.json(results);
        });
    },
    allCategoryRates: (req, res) => {
        ratesModel.find({ "category._id.oid": req.params.category }).exec(function (error, results) {
            if (error) {
                return next(error);
            }
            res.json(results);
        });
    },
    updateSequence: (req, res) => {
        var mainId = req.params.id;
        var secondId = req.params.otherid;
        getSequenceNumber(mainId).then(
            function (firstSeqNumber) {
                getSequenceNumber(secondId).then(
                    function (secondSeqNumber) {
                        swapSequence(mainId, firstSeqNumber, secondId, secondSeqNumber).then(
                            function (success) {
                                res.status(200);
                                res.json(success);
                            });
                    });
            });
    },
    getOldRates: (req, res) => {
        var location = req.body.locationId;
        var product = req.body.productId;
        var startDate = new Date(req.body.startDate);
        startDate.setHours(0, 0, 0, 0);
        var endDate = new Date(req.body.endDate);
        endDate.setHours(23, 59, 59, 0);
        console.log(location + " " + product + " " + startDate + " " + endDate)
        ratesModel.find({
            "location._id.oid": location, "product._id.oid": product,
            date: {
                $gte: startDate,
                $lt: endDate
            }
        }).select({ 'rate': 1, 'date': 1 }).exec(function (error, results) {
            if (error) {
                return next(error);
            }
            res.json(results);
        });
    }
}
function copyObject(newRate) {
    var ratesOld = new ratesOldModel();
    ratesOld.product = newRate.product;
    ratesOld.location = newRate.location;
    ratesOld.category = newRate.category;
    ratesOld.descriptionEng = newRate.descriptionEng;
    ratesOld.descriptionUrdu = newRate.descriptionUrdu;
    ratesOld.date = newRate.date;
    ratesOld.rate = newRate.rate;
    ratesOld.percentage = newRate.percentage;
    return ratesOld;
}

function countDocument(category) {
    return new Promise(
        (resolve, reject) => {
            ratesModel.countDocuments({ 'category': category }, function (err, c) {
                if (err) {
                    reject(err);
                }
                resolve(c + 1);
            });
        });
}

function getSequenceAndUpdateInDb(id) {
    return new Promise(
        (resolve, reject) => {
            ratesModel.findById(id).exec(function (error, result) {
                if (error) {
                    reject(error);
                }
                var ObjectToReturned = {
                    "sequence": result.sequence,
                    "category": result.category
                };
                var ratesOld = copyObject(result);
                ratesOld.save((err) => {
                    if (err) {
                        console.log("rate updating failed while deleting")
                    }
                    resolve(ObjectToReturned);
                });
            });
        });
}

function updateSequence(seq, category) {
    var sequence = parseInt(seq);
    return new Promise(
        (resolve, reject) => {
            ratesModel.find({ "sequence": { $gt: sequence }, "category": category }).sort({ 'sequence': '1' }).exec(function (error, results) {
                if (error) {
                    reject(error);
                }
                var count = 0;
                console.log(results.length);
                for (var i = 0; i < results.length; i++) {
                    results[i].sequence = results[i].sequence - 1;
                    ratesModel.findByIdAndUpdate(results[i].id, results[i], { new: true }, (err, todo) => {
                        count++;
                        if (results.length == count) {
                            console.log("check");
                            resolve("sequence updated");
                        }
                    });
                }
            });
        });
}

function getSequenceNumber(id) {
    return new Promise(
        (resolve, reject) => {
            ratesModel.findById(id).exec(function (error, result) {
                if (error) {
                    reject(error);
                }
                resolve(result.sequence);
            });
        });
}

function swapSequence(firstId, firstSeqNumber, secondId, secondSeqNumber) {
    return new Promise(
        (resolve, reject) => {
            ratesModel.findByIdAndUpdate(firstId, { "sequence": secondSeqNumber }, { new: true }, (error, todo) => {
                if (error) {
                    reject(error);
                }
                ratesModel.findByIdAndUpdate(secondId, { "sequence": firstSeqNumber }, { new: true }, (err, todo) => {
                    if (err) {
                        reject(err);
                    }
                    resolve("Updated");
                });
            });
        });
}
module.exports = ratesController

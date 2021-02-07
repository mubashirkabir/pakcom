var planModel = require("../models/plan")

var planController = {
    addPlan: (req, res) => {
        var plan = new planModel(req.body);
        plan.save((err) => {
            if (err) {
                res.status(500)
                res.send("Failed to add" + err); rs
            }
            else {
                res.status(200);
                res.end("Successfully added");
            }
        });
    },
    updatePlan: (req, res) => {
        planModel.findByIdAndUpdate(req.params.id, req.body, { new: true }, (err, todo) => {
            if (err) {
                res.status(500);
                res.end("Failed to Update");
            }
            if (!todo) {
                res.status(404)
                res.end("Plan does not exist")
            }
            else {
                res.status(200);
                res.json(todo);
            }
        });
    },
    deletePlan: (req, res) => {
        planModel.findByIdAndRemove(req.params.id, req.body, { new: true }, (err, todo) => {
            if (err) {
                res.status(500);
                res.end("Failed to Update");
            }
            if (!todo) {
                res.status(404)
                res.end("Plan does not exist")
            }
            else {
                res.status(200);
                res.json(todo);
            }
        });
    },
    getPlan: (req, res) => {
        planModel.findById(req.params.id).exec(function (error, results) {
            if (error) {
                return next(error);
            }
            res.json(results);
        });
    },
    allPlan: (req, res) => {
        planModel.find({}).exec(function (error, results) {
            if (error) {
                return next(error);
            }
            res.json(results);
        });
    }
}
module.exports = planController
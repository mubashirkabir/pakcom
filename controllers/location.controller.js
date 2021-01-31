var locationModel = require("../models/location")

var locationController = {
    addLocation: (req, res) => {
        var location = new locationModel(req.body);
        location.save((err) => {
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
    updateLocation: (req, res) => {
        locationModel.findByIdAndUpdate(req.params.id, req.body, { new: true }, (err, todo) => {
            if (err) {
                res.status(500);
                res.end("Failed to Update");
            }
            if (!todo) {
                res.status(404)
                res.end("location does not exist")
            }
            else {
                res.status(200);
                res.json(todo);
            }
        });
    },
    deleteLocation: (req, res) => {
        locationModel.findByIdAndRemove(req.params.id, req.body, { new: true }, (err, todo) => {
            if (err) {
                res.status(500);
                res.end("Failed to Update");
            }
            if (!todo) {
                res.status(404)
                res.end("location does not exist")
            }
            else {
                res.status(200);
                res.json(todo);
            }
        });
    },
    allLocations: (req, res) => {
        locationModel.find({}).exec(function (error, results) {
            if (error) {
                return next(error);
            }
            res.json(results);
        });
    }
}
module.exports = locationController
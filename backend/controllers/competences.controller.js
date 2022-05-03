const db = require("../models");
const Competence = db.competences;
const Op = db.Sequelize.Op;
// Create and save a new character
exports.create = (req, res) => {
    // Validate request
    if (!req.body.name_competence) {
        res.status(400).send({
            message: "Content can not be empty!"
        });
        return;
    }
    //Create a Tutorial
    const competence = {
        name: req.body.name_competence,
        charac_competence: req.body.charac_competence
    };
    //Save Competence in the database
    Competence.create(competence)
        .then(data => {
            res.send(data);
        })
        .catch(err => {
            res.status(500).send({
                message: err.message || "Some error occurred while creating the Competence"
            });
        });
};

//Retrieve all character from database.
exports.findAll = (req, res) => {

    }
    // Find a single Tutorial with an id
exports.findOne = (req, res) => {

};
// Update a Tutorial by the id in the request
exports.update = (req, res) => {

};
// Delete a Tutorial with the specified id in the request
exports.delete = (req, res) => {

};
// Delete all Tutorials from the database.
exports.deleteAll = (req, res) => {

};
// Find all published Tutorials
exports.findAllPublished = (req, res) => {

};
const db = require("../models");
const Competence = db.competences;
const Op = db.Sequelize.Op;
// Create and save a new character
exports.create = (req, res) => {
    //    Validate request
    if (!req.body.name_competence) {
        res.status(400).send({
            message: "Content can not be empty!"
        });
        return
    }
    //Create a Competence
    const competence = {
        name_competence: req.body.name_competence,
        description: req.body.description,
        carac_competence: req.body.carac_competence
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
    const name = req.query.name_competence;
    var condition = name ? {
        name: {
            [Op.like]: `%${name}%`
        }
    } : null;
    Competence.findAll({ where: condition })
        .then(data => {
            res.send(data);
        })
        .catch(err => {
            res.status(500).send({
                message: err.message || "Some error occurred while retrieving competences."
            });
        });
};
// Find a single Competence with an id
exports.findOne = (req, res) => {
    const id = req.params.id;
    Competence.findByPk(id)
        .then(data => {
            if (data) {
                res.send(data);
            } else {
                res.status(404).send({
                    message: `Cannot find Competence with id=${id}.`
                });
            }
        })
        .catch(err => {
            res.status(500).send({
                message: "Error retrieving Competence with id=" + id
            });
        });
};

// Update a Competence by the id in the request
exports.update = (req, res) => {
    const id = req.params.id_competence;
    Competence.update(req.body, {
            where: { id: id }
        })
        .then(num => {
            if (num == 1) {
                res.send({
                    message: "Competence was updated successfully."
                });
            } else {
                res.send({
                    message: `Cannot update Competence with id=${id}. Maybe Tutorial was not found or req.body is empty!`
                });
            }
        })
        .catch(err => {
            res.status(500).send({
                message: "Error updating Competence with id=" + id
            });
        });
};
// Delete a Competence with the specified id in the request
exports.delete = (req, res) => {
    const id = req.params.id;
    Competence.destroy({
            where: { id: id }
        })
        .then(num => {
            if (num == 1) {
                res.send({
                    message: "Competence was deleted successfully!"
                });
            } else {
                res.send({
                    message: `Cannot delete Competence with id=${id}. Maybe Tutorial was not found!`
                });
            }
        })
        .catch(err => {
            res.status(500).send({
                message: "Could not delete Competence with id=" + id
            });
        });
};
// Delete all Competence from the database.
exports.deleteAll = (req, res) => {
    Competence.destroy({
            where: {},
            truncate: false
        })
        .then(nums => {
            res.send({ message: `${nums} Competence were deleted successfully!` });
        })
        .catch(err => {
            res.status(500).send({
                message: err.message || "Some error occurred while removing all competences."
            });
        });
};
//  Find all published Competence
exports.findAllPublished = (req, res) => {
    Competence.findAll({ where: { published: true } })
        .then(data => {
            res.send(data);
        })
        .catch(err => {
            res.status(500).send({
                message: err.message || "Some error occurred while retrieving competences."
            });
        });
};
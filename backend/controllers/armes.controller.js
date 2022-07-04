const db = require("../models");
const Arme = db.armes;
const Op = db.Sequelize.Op;

// Create and Save a new character
exports.create = (req, res) => {
    //    Validate request
    if (!req.body.name_arme) {
        res.status(400).send({
            message: "Le champ ne peut pas être vide "
        });
        return
    }
    //Create an Arme
    const arme = {
        name_arme: req.body.name_arme,
        type_degat: req.body.type_degat,
        category_arme: req.body.category_arme,
        nb_degat: req.body.nb_degat,
        prix_arme: req.body.prix_arme
    };
    //Save Competence in the database
    Arme.create(arme)
        .then(data => {
            res.send(data);
        })
        .catch(err => {
            res.status(500).send({
                message: err.message || "Some error occurred while creating the Arme"
            });
        });
};
// Retrieve all armes from database
exports.findAll = (req, res) => {
    const name = req.query.name_arme;
    var condition = name ? {
        name_arme: {
            [Op.like]: `%${name}%`
        }
    } : null;
    Arme.findAll({ where: condition })
        .then(data => {
            res.send(data);
        })
        .catch(err => {
            res.status(500).send({
                message: err.message || "Some error occurred while retrieving armes."
            });
        });
};

// Retrieve all armes from database
exports.findOne = (req, res) => {
    const id = req.params.id;
    Arme.findByPk(id)
        .then(data => {
            if (data) {
                res.send(data);
            } else {
                res.status(404).send({
                    message: `Cannot find Arme with id=${id}.`
                });
            }
        })
        .catch(err => {
            res.status(500).send({
                message: "Error retrieving Competence with id=" + id
            });
        });
};
// Retrieve all armes from database
exports.update = (req, res) => {
    const id = req.params.id;
    Arme.update(req.body, {
            where: { id_arme: id }
        })
        .then(num => {
            if (num == 1) {
                res.send({
                    message: "Arme was updated successfully."
                });
            } else {
                res.send({
                    message: `Cannot update Arme with id=${id}. \ 
                    Maybe Arme was not found or req.body is empty!`
                });
            }
        })
        .catch(err => {
            res.status(500).send({
                message: "Error updating Arme with id=" + id
            });
        });
};
// Retrieve all armes from database
exports.delete = (req, res) => {
    const id = req.params.id;
    Arme.destroy({
            where: { id_arme: id }
        })
        .then(num => {
            if (num == 1) {
                res.send({
                    message: "Arme was deleted successfully!"
                });
            } else {
                res.send({
                    message: `Cannot delete Arme with id=${id}. Maybe Arme was not found!`
                });
            }
        })
        .catch(err => {
            res.status(500).send({
                message: "Could not delete Arme with id=" + id
            });
        });
};
// Retrieve all armes from database
exports.deleteAll = (req, res) => {
    Arme.destroy({
            where: {},
            truncate: false
        })
        .then(nums => {
            res.send({ message: `${nums} Arme were deleted successfully!` });
        })
        .catch(err => {
            res.status(500).send({
                message: err.message || "Some error occurred while removing all arme."
            });
        });
};

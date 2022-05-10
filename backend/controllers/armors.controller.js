const db = require("../models");
const Armor = db.armors;
const Op = db.Sequelize.Op;

// Create and Save a new character
exports.create = (req, res) => {
    //    Validate request
    if (!req.body.name_armor) {
        res.status(400).send({
            message: "Le champ ne peut pas être vide "
        });
        return
    }
    //Create an Armor
    const armor = {
        name_armor: req.body.name_armor,
        bonus_ca: req.body.bonus_ca,
        category_armor: req.body.category_armor,
        malus_dex: req.body.malus_dex,
        prix_armor: req.body.prix_armor,

    };
    //Save Competence in the database
    Armor.create(armor)
        .then(data => {
            res.send(data);
        })
        .catch(err => {
            res.status(500).send({
                message: err.message || "Some error occurred while creating the Armor"
            });
        });
};
// Retrieve all armors from database
exports.findAll = (req, res) => {
    const name = req.query.name_armor;
    var condition = name ? {
        name_armor: {
            [Op.like]: `%${name}%`
        }
    } : null;
    Armor.findAll({ where: condition })
        .then(data => {
            res.send(data);
        })
        .catch(err => {
            res.status(500).send({
                message: err.message || "Some error occurred while retrieving armors."
            });
        });
};

// Retrieve all armors from database
exports.findOne = (req, res) => {
    const id = req.params.id;
    Armor.findByPk(id)
        .then(data => {
            if (data) {
                res.send(data);
            } else {
                res.status(404).send({
                    message: `Cannot find Armor with id=${id}.`
                });
            }
        })
        .catch(err => {
            res.status(500).send({
                message: "Error retrieving Competence with id=" + id
            });
        });
};
// Retrieve all armors from database
exports.update = (req, res) => {
    const id = req.params.id;
    Armor.update(req.body, {
            where: { id_arme: id }
        })
        .then(num => {
            if (num == 1) {
                res.send({
                    message: "Armor was updated successfully."
                });
            } else {
                res.send({
                    message: `Cannot update Armor with id=${id}. \ 
                    Maybe Armor was not found or req.body is empty!`
                });
            }
        })
        .catch(err => {
            res.status(500).send({
                message: "Error updating Armor with id=" + id
            });
        });
};
// Retrieve all armors from database
exports.delete = (req, res) => {
    const id = req.params.id;
    Armor.destroy({
            where: { id_armor: id }
        })
        .then(num => {
            if (num == 1) {
                res.send({
                    message: "Armor was deleted successfully!"
                });
            } else {
                res.send({
                    message: `Cannot delete Armor with id=${id}. Maybe Arme was not found!`
                });
            }
        })
        .catch(err => {
            res.status(500).send({
                message: "Could not delete Armor with id=" + id
            });
        });
};
// Retrieve all armors from database
exports.deleteAll = (req, res) => {
    Armor.destroy({
            where: {},
            truncate: false
        })
        .then(nums => {
            res.send({ message: `${nums} Armor were deleted successfully!` });
        })
        .catch(err => {
            res.status(500).send({
                message: err.message || "Some error occurred while removing all armor."
            });
        });
};
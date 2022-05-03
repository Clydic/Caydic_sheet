const { Sequelize } = require(".");

module.exports = (sequelize, Sequelize) => {
    const Competence = sequelize.define("competences", {
        id_competence: {
            type: Sequelize.INTEGER,
            autoIncrement: true,
            allowNull: false,
            primaryKey: true
        },
        name_competence: {
            type: Sequelize.STRING,
            allowNull: false
        },
        charac_competence: {
            type: Sequelize.STRING,
            allowNull: false
        },
        description: {
            type: Sequelize.STRING

        }


    });
    return Competence;
};
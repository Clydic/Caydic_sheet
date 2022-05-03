const { Sequelize } = require(".");

module.exports = (sequelize, Sequelize) => {
    const Character = sequelize.define("character", {
        firsname: {
            type: Sequelize.STRING
        },
        lastname: {
            type: Sequelize.STRING

        },
        age: {
            type: Sequelize.INTEGER
        },
        force: {
            type: Sequelize.INTEGER

        },
        dexterite: {
            type: Sequelize.INTEGER

        },
        constitution: {
            type: Sequelize.INTEGER

        },
        wisdom: {
            type: Sequelize.INTEGER

        },
        charism: {
            type: Sequelize.INTEGER

        },
        intelligence: {
            type: Sequelize.INTEGER

        },
        bba: {
            type: Sequelize.INTEGER
        }
    });
    return Character;
};
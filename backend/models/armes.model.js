module.exports = (sequelize, Sequelize) => {
    const Arme = sequelize.define("arme", {
        id_arme: {
            type: Sequelize.INTEGER,
            autoIncrement: true,
            allowNull: false,
            primaryKey: true
        },
        name_arme: {
            type: Sequelize.STRING,
            allowNull: false
        },
        type_degat: {
            type: Sequelize.STRING,
            allowNull: false
        },
        category_arme: {
            type: Sequelize.STRING,
            allowNull: false
        },
        nb_degat: {
            type: Sequelize.STRING,
            allowNull: false
        },
        prix_arme: {
            type: Sequelize.INTEGER,
            allowNull: false
        },

    });
    return Arme;
};

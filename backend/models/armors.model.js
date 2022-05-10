module.exports = (sequelize, Sequelize) => {
    const Armor = sequelize.define("armure", {
        id_armor: {
            type: Sequelize.INTEGER,
            autoIncrement: true,
            allowNull: false,
            primaryKey: true
        },
        name_armor: {
            type: Sequelize.STRING,
            allowNull: false
        },
        bonus_ca: {
            type: Sequelize.STRING,
            allowNull: false
        },
        category_armor: {
            type: Sequelize.STRING,
            allowNull: true
        },
        malus_dex: {
            type: Sequelize.STRING,
            allowNull: true
        },
        prix_armor: {
            type: Sequelize.STRING,
            allowNull: true
        },

    });
    return Armor;
};
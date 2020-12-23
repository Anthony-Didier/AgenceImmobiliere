'use strict';
const {
    Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
    class Acheteur extends Model {
        /**
         * Helper method for defining associations.
         * This method is not a part of Sequelize lifecycle.
         * The `models/index` file will call this method automatically.
         */
        static associate(models) {
            // define association here
            Acheteur.belongsToMany(models.Bien, { through: models.DateAchat });
        }
    };
    Acheteur.init({
        name: DataTypes.STRING,
        firstname: DataTypes.STRING,
        email: DataTypes.STRING,
    }, {
        sequelize,
        modelName: 'Acheteur',
    });
    return Acheteur;
};
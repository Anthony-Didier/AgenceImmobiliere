'use strict';
const {
    Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
    class CaracteristiqueBien extends Model {
        /**
         * Helper method for defining associations.
         * This method is not a part of Sequelize lifecycle.
         * The `models/index` file will call this method automatically.
         */
        static associate(models) {
            // define association here
            CaracteristiqueBien.belongsTo(models.Bien);
            CaracteristiqueBien.belongsTo(models.Caracteristique);
        }
    };
    CaracteristiqueBien.init({}, {
        sequelize,
        modelName: 'CaracteristiqueBien',
    });
    return CaracteristiqueBien;
};
'use strict';
const {
    Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
    class DateAchat extends Model {
        /**
         * Helper method for defining associations.
         * This method is not a part of Sequelize lifecycle.
         * The `models/index` file will call this method automatically.
         */
        static associate(models) {
            // define association here
            DateAchat.belongsTo(models.Acheteur);
            DateAchat.belongsTo(models.Bien);
        }
    };
    DateAchat.init({
        date_achat: DataTypes.DATE
    }, {
        sequelize,
        modelName: 'DateAchat',
    });
    return DateAchat;
};
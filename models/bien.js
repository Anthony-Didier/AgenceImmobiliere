'use strict';
const {
    Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
    class Bien extends Model {
        /**
         * Helper method for defining associations.
         * This method is not a part of Sequelize lifecycle.
         * The `models/index` file will call this method automatically.
         */
        static associate(models) {
            // define association here
            Bien.belongsToMany(models.Acheteur, { through: models.DateAchat });
            Bien.belongsToMany(models.Keyword, { through: models.KeywordBien });
            Bien.belongsToMany(models.Caracteristique, { through: models.CaracteristiqueBien })
            Bien.hasOne(models.Annonce);
            Bien.hasMany(models.KeywordBien);
            Bien.hasMany(models.CaracteristiqueBien);
        }
    };
    Bien.init({
        description: DataTypes.STRING,
        price: DataTypes.FLOAT,
        area: DataTypes.STRING
    }, {
        sequelize,
        modelName: 'Bien',
    });
    return Bien;
};
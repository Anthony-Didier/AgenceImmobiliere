'use strict';
module.exports = {
    up: async(queryInterface, Sequelize) => {
        await queryInterface.createTable('CaracteristiqueBiens', {
                id: {
                    allowNull: false,
                    autoIncrement: true,
                    primaryKey: true,
                    type: Sequelize.INTEGER
                },
                BienId: {
                    type: Sequelize.INTEGER,
                    onDelete: "CASCADE",
                    allowNull: false,
                    references: {
                        model: 'Biens',
                        key: 'id'
                    },
                    unique: 'CaracteristiqueBien'
                },
                CaracteristiqueId: {
                    type: Sequelize.INTEGER,
                    onDelete: "CASCADE",
                    allowNull: false,
                    references: {
                        model: 'Caracteristiques',
                        key: 'id'
                    },
                    unique: 'CaracteristiqueBien'
                },
                createdAt: {
                    allowNull: false,
                    type: Sequelize.DATE
                },
                updatedAt: {
                    allowNull: false,
                    type: Sequelize.DATE
                }
            })
            .then(() => {
                return queryInterface.sequelize.query(
                    'ALTER TABLE `CaracteristiqueBiens` ADD UNIQUE `unique_index`(`BienId`,`CaracteristiqueId`)'
                );
            });
    },
    down: async(queryInterface, Sequelize) => {
        await queryInterface.dropTable('CaracteristiqueBiens');
    }
};
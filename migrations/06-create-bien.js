'use strict';
module.exports = {
    up: async(queryInterface, Sequelize) => {
        await queryInterface.createTable('Biens', {
            id: {
                allowNull: false,
                autoIncrement: true,
                primaryKey: true,
                type: Sequelize.INTEGER
            },
            description: {
                type: Sequelize.STRING
            },
            price: {
                type: Sequelize.FLOAT
            },
            area: {
                type: Sequelize.STRING
            },
            AcheteurId: {
                type: Sequelize.INTEGER,
                onDelete: 'CASCADE',
                allowNull: true,
                references: {
                    model: 'Acheteurs',
                    key: 'id'
                }
            },
            KeywordId: {
                type: Sequelize.INTEGER,
                onDelete: 'CASCADE',
                allowNull: false,
                references: {
                    model: 'Keywords',
                    key: 'id'
                }
            },
            CaracteristiqueId: {
                type: Sequelize.INTEGER,
                onDelete: 'CASCADE',
                allowNull: false,
                references: {
                    model: 'Caracteristiques',
                    key: 'id'
                }
            },
            createdAt: {
                allowNull: false,
                type: Sequelize.DATE
            },
            updatedAt: {
                allowNull: false,
                type: Sequelize.DATE
            }
        });
    },
    down: async(queryInterface, Sequelize) => {
        await queryInterface.dropTable('Biens');
    }
};
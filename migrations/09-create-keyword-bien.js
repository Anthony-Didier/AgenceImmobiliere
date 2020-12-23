'use strict';
module.exports = {
    up: async(queryInterface, Sequelize) => {
        await queryInterface.createTable('KeywordBiens', {
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
                    unique: 'KeywordBien'
                },
                KeywordId: {
                    type: Sequelize.INTEGER,
                    onDelete: "CASCADE",
                    allowNull: false,
                    references: {
                        model: 'Keywords',
                        key: 'id'
                    },
                    unique: 'KeywordBien'
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
                    'ALTER TABLE `KeywordBiens` ADD UNIQUE `unique_index`(`BienId`,`KeywordId`)'
                );
            });
    },
    down: async(queryInterface, Sequelize) => {
        await queryInterface.dropTable('KeywordBiens');
    }
};
'use strict';

module.exports = {
    up: async(queryInterface, Sequelize) => {

        await queryInterface.bulkInsert('Caracteristiques', [{
            name: 'Calme',
            createdAt: new Date(),
            updatedAt: new Date()
        }, {
            name: 'Lumineux',
            createdAt: new Date(),
            updatedAt: new Date()
        }, {
            name: 'Pour les riches',
            createdAt: new Date(),
            updatedAt: new Date()
        }])

    },

    down: async(queryInterface, Sequelize) => {

        await queryInterface.bulkDelete('Caracteristiques', null, {});
    }
};
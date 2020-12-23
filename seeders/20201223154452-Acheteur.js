'use strict';

module.exports = {
    up: async(queryInterface, Sequelize) => {

        await queryInterface.bulkInsert('Acheteurs', [{
            name: 'Didier',
            firstname: 'Anthony',
            email: 'anthony@mail.com',
            createdAt: new Date(),
            updatedAt: new Date()
        }])

    },

    down: async(queryInterface, Sequelize) => {

        await queryInterface.bulkDelete('Acheteurs', null, {});
    }
};
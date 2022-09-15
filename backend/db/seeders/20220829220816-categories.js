'use strict';

module.exports = {
  async up (queryInterface, Sequelize) {
    let categorie = [
      {
        name: 'test categorie',
        description: 'this is a test categorie',
        created_at: new Date(),
        updated_at: new Date(),
      },
    ];

    return queryInterface.bulkInsert("categories", categorie, {});
  },

  async down (queryInterface, Sequelize) {
    return queryInterface.bulkDelete("categories", null, {});
  }
};

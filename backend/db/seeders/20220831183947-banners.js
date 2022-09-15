'use strict';

module.exports = {
  async up (queryInterface, Sequelize) {
    const banners = require('../seeders_mocks/banners')
    
    return queryInterface.bulkInsert("banners", banners, {});
  },

  async down (queryInterface, Sequelize) {
    return queryInterface.bulkDelete("banners", null, {});
  }
};

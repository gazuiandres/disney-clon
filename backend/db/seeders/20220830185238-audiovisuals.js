"use strict";

module.exports = {
  async up(queryInterface, Sequelize) {
    const audiovisuals = require('../seeders_mocks/audiovisuals')
    
    return queryInterface.bulkInsert("audiovisuals", audiovisuals, {});
  },

  async down(queryInterface, Sequelize) {
    return queryInterface.bulkDelete("audiovisuals", null, {});
  },
};

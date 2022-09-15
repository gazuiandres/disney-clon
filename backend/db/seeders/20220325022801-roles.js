"use strict";

module.exports = {
  async up(queryInterface, Sequelize) {

    let roles = [
      {
        name: "admin",
        created_at: new Date(),
        updated_at: new Date(),
      },
      {
        name: "user",
        created_at: new Date(),
        updated_at: new Date(),
      },
    ];

    return queryInterface.bulkInsert("roles", roles, {});
  },

  async down(queryInterface, Sequelize) {
    return queryInterface.bulkDelete("roles", null, {});
  },
};

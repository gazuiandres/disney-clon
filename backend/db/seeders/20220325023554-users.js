"use strict";
const bcrypt = require("bcrypt");

const { config } = require("../../config");

module.exports = {
  async up(queryInterface, Sequelize) {

    let user = [
      {
        username: config.userAdmin.username,
        email: config.userAdmin.email,
        password: bcrypt.hashSync(config.userAdmin.password, 10),
        role_id: 1,
        created_at: new Date(),
        updated_at: new Date(),
      },
    ];

    return queryInterface.bulkInsert("users", user, {});
  },

  async down(queryInterface, Sequelize) {
    return queryInterface.bulkDelete("users", null, {});
  },
};

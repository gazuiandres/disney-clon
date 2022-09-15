"use strict";

const { BANNER_TABLE } = require("../models/banner.model");

const { DataTypes, Sequelize } = require("sequelize");

module.exports = {
  async up(queryInterface) {
    await queryInterface.createTable(BANNER_TABLE, {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: DataTypes.INTEGER,
      },
      name: {
        allowNull: false,
        type: DataTypes.STRING,
        unique: true,
      },
      status: {
        allowNull: false,
        type: DataTypes.STRING,
      },
      titleImageDesktop: {
        field: "title_image_desktop",
        allowNull: false,
        type: DataTypes.STRING,
      },
      titleImageMobile: {
        field: "title_image_mobile",
        allowNull: false,
        type: DataTypes.STRING,
      },
      backgroundDesktop: {
        field: "background_desktop",
        allowNull: false,
        type: DataTypes.STRING,
      },
      backgroundMobile: {
        field: "background_mobile",
        allowNull: false,
        type: DataTypes.STRING,
      },
      createdAt: {
        allowNull: false,
        type: DataTypes.DATE,
        field: "created_at",
        defaultValue: Sequelize.NOW,
      },
      updatedAt: {
        allowNull: true,
        type: DataTypes.DATE,
        field: "updated_at",
      },
    });
  },

  async down(queryInterface) {
    await queryInterface.dropTable(BANNER_TABLE);
  },
};

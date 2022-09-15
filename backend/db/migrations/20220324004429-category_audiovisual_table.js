"use strict";

const { CATEGORY_TABLE } = require("../models/category.model");
const { AUDIOVISUAL_TABLE } = require("../models/audiovisual.model");
const {
  CATEGORY_AUDIOVISUAL_TABLE,
} = require("../models/category-audiovisual.model");

const { DataTypes, Sequelize } = require("sequelize");

module.exports = {
  async up(queryInterface) {
    await queryInterface.createTable(CATEGORY_AUDIOVISUAL_TABLE, {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: DataTypes.INTEGER,
      },
      categoryId: {
        field: "category_id",
        allowNull: false,
        type: DataTypes.INTEGER,
        reference: {
          model: CATEGORY_TABLE,
          key: "id",
        },
      },
      audiovisualId: {
        field: "audiovisual_id",
        allowNull: false,
        type: DataTypes.INTEGER,
        reference: {
          model: AUDIOVISUAL_TABLE,
          key: "id",
        },
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
    await queryInterface.dropTable(CATEGORY_AUDIOVISUAL_TABLE);
  },
};

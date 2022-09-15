const { Model, DataTypes, Sequelize } = require("sequelize");

const BANNER_TABLE = "banners";

const BannerSchema = {
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
};

class Banner extends Model {
  static config(sequelize) {
    return {
      sequelize,
      tableName: BANNER_TABLE,
      modelName: "Banner",
      timestamps: true,
    };
  }
}

module.exports = { BANNER_TABLE, Banner, BannerSchema };

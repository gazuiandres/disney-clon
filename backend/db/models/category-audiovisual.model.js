const { Model, DataTypes, Sequelize } = require("sequelize");

const { CATEGORY_TABLE } = require("./category.model");
const { AUDIOVISUAL_TABLE } = require("./audiovisual.model");

const CATEGORY_AUDIOVISUAL_TABLE = "categories_audiovisuals";

const CategoryAudiovisualSchema = {
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
};

class CategoryAudiovisual extends Model {

  static associate(models) {
    this.belongsTo(models.Audiovisual, {
      as: 'audiovisual',
    });
    this.belongsTo(models.Category, {
      as: 'category',
    });
  }

  static config(sequelize) {
    return {
      sequelize,
      tableName: CATEGORY_AUDIOVISUAL_TABLE,
      modelName: "CategoryAudiovisual",
      timestamps: true,
    };
  }
}

module.exports = {
  CATEGORY_AUDIOVISUAL_TABLE,
  CategoryAudiovisualSchema,
  CategoryAudiovisual,
};

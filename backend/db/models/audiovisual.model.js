const { Model, DataTypes, Sequelize } = require("sequelize");

const AUDIOVISUAL_TABLE = "audiovisuals";

const AudiovisualSchema = {
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
  type: {
    allowNull: false,
    type: DataTypes.STRING,
  },
  synopsis: {
    allowNull: false,
    type: DataTypes.TEXT,
  },
  numberSeasons: {
    field: "number_seasons",
    allowNull: false,
    type: DataTypes.NUMBER,
  },
  background: {
    field: "background",
    allowNull: false,
    type: DataTypes.STRING,
  },
  logoDesktop: {
    field: "logo_desktop",
    allowNull: false,
    type: DataTypes.STRING,
  },
  logoMobile: {
    field: "logo_mobile",
    allowNull: false,
    type: DataTypes.STRING,
  },
  thumbnailDesktop: {
    field: "thumbnail_desktop",
    allowNull: false,
    type: DataTypes.STRING,
  },
  thumbnailMobile: {
    field: "thumbnail_mobile",
    allowNull: false,
    type: DataTypes.STRING,
  },
  createdDate: {
    field: "created_date",
    allowNull: false,
    type: DataTypes.DATE,
  },
  updatedDate: {
    field: "updated_date",
    allowNull: false,
    type: DataTypes.DATE,
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

class Audiovisual extends Model {
  static associate(models) {
    this.belongsToMany(models.Category, {
      as: 'categories',
      through: models.CategoryAudiovisual,
      foreignKey: 'audiovisualId',
      otherKey: 'categoryId'
    })
  }

  static config(sequelize) {
    return {
      sequelize,
      tableName: AUDIOVISUAL_TABLE,
      modelName: "Audiovisual",
      timestamps: true,
    };
  }
}

module.exports = { AUDIOVISUAL_TABLE, Audiovisual, AudiovisualSchema };

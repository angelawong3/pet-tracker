const { Model, DataTypes } = require('sequelize');
const sequelize = require('../config/connection');

class PetPicture extends Model {}

PetPicture.init(
  {
    picture_url: {
      type: DataTypes.STRING,
      allowNull: false,
      primaryKey: true,
    },

    pet_id: {
      type: DataTypes.INTEGER,
      references: {
        model: 'pet',
        key: 'id',
      },
    },
  },
  {
    sequelize,
    timestamps: false,
    freezeTableName: true,
    underscored: true,
    modelName: 'PetPicture',
  }
);

module.exports = PetPicture;

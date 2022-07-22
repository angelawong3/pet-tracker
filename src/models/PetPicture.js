const { Model, DataTypes } = require('sequelize');
const sequelize = require('../config/connection');

class PetPicture extends Model {}

PetPicture.init(
  {
    id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true,
      autoIncrement: true,
    },
    picture_url: {
      type: DataTypes.STRING,
      allowNull: false,
      primaryKey: true,
    },
    // pet_id: {
    //   type: DataTypes.INTEGER,
    //   references: {
    //     model: 'pet',
    //     key: 'id',
    //   },
    // },
  },
  {
    sequelize,
    timestamps: false,
    freezeTableName: true,
    underscored: true,
    modelName: 'petPicture',
  }
);

module.exports = PetPicture;

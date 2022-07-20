const { Model, DataTypes } = require('sequelize');
const sequelize = require('../config/connection');

class Pet extends Model {}

Pet.init(
  {
    id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true,
      autoIncrement: true,
    },
    pet_name: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    pet_breed: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    pet_gender: {
      type: DataTypes.STRING,
      allowNull: false,
      validate: {
        isIn: [['M', 'F']],
      },
    },
    birth_date: {
      type: DataTypes.DATE,
      allowNull: false,
      defaultValue: DataTypes.NOW,
      validate: {
        isDate: true,
      },
    },
    pet_weight: {
      type: DataTypes.INTEGER,
      allowNull: false,
    },
    next_appointment: {
      type: DataTypes.DATE,
      allowNull: false,
      validate: {
        isDate: true,
      },
    },
    pet_picture: {
      type: DataTypes.STRING,
      allowNull: false,
      validate: {
        isUrl: true,
      },
    },
    user_id: {
      type: DataTypes.INTEGER,
      references: {
        model: 'user',
        key: 'id',
      },
    },
  },
  {
    sequelize,
    timestamps: false,
    freezeTableName: true,
    underscored: true,
    modelName: 'pet',
  }
);

module.exports = Pet;

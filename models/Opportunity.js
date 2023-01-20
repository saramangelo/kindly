const { Model, DataTypes } = require('sequelize');
const sequelize = require('../config/connection');

class Opportunity extends Model {}

Opportunity.init(
  {
    id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true,
      autoIncrement: true,
    },
    name: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    description: {
      type: DataTypes.STRING,
    },
    date_created: {
      type: DataTypes.DATE,
      allowNull: false,
      defaultValue: DataTypes.NOW,
    },
    location: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    items: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    volunteers_needed: {
      type: DataTypes.INTEGER,
      allowNull: false,
    },
    // This will save an image to database
    photo: {
      type: DataTypes.BLOB,
      allowNull: false,
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
    modelName: 'opportunity',
  }
);

module.exports = Opportunity;

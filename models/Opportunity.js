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
       // opportunity name
       name: {
        type: DataTypes.STRING,
        allowNull: false,
      },
    // name of org sponsoring opp
    organization_name: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    // description of opportunity
    description: {
      type: DataTypes.STRING,
    },
    // date of opportunity
    date_of_opp: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: DataTypes.NOW,
    },
    // location of opportunity
    location: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    // items to bring to opportunity
    items: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    // total volunteers needed - to be logically compared to who has already signed up (bonus)
    volunteers_needed: {
      type: DataTypes.INTEGER,
      allowNull: false,
    },
    // This will save an image to database
    photo: {
      type: DataTypes.STRING,
      allowNull: false,
    },

  // user_id referencing ID of User who created this opportunity

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

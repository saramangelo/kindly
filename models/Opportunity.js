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
    // name of opportunity
    name: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    // description of opportunity
    description: {
      type: DataTypes.STRING,
    },
    // date of opportunity
    date_of_opp: {
      type: DataTypes.DATE,
      allowNull: false,
      defaultValue: DataTypes.NOW,
    },
    // location of opportunity
    location: {
      type: DataTypes.STRING,
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

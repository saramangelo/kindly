const { Model, DataTypes } = require('sequelize');
const sequelize = require('../config/connection');

class Comments extends Model {}

Comments.init(
  {
    comments: {
      type: DataTypes.TEXT,
      allowNull: false,
    },
    user_id: {
      type: DataTypes.INTEGER,
      references: {
        model: 'user',
        key: 'id',
      },
    },
    opportunity_id: {
      type: DataTypes.INTEGER,
      references: {
        model: 'opportunity',
        key: 'id',
      },
    },
    user_name: {
      type: DataTypes.STRING,
      references: {
        model: 'user',
        key: 'name',
      },
    },
  },
  {
    sequelize,
    timestamps: false,
    freezeTableName: true,
    underscored: true,
    modelName: 'comments',
  }
);

module.exports = Comments;

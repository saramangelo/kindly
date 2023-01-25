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

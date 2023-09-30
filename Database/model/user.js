const { Model, DataTypes, Sequelize } = require("sequelize");
const sequalize = require("../connection");

const userSchema = {
  user_id: {
    type: Sequelize.UUID,
    defaultValue: Sequelize.UUIDV4,
    allowNull: false,
    primaryKey: true,
  },
  user_name: {
    type: DataTypes.STRING,
    allowNull: true,
    defaultValue: null,
  },
  user_email: {
    type: DataTypes.STRING,
    allowNull: false,
    unique: true,
  },
  user_password: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  user_image: {
    type: DataTypes.STRING,
    allowNull: true,
    defaultValue: null,
  },
  total_orders: {
    type: DataTypes.INTEGER,
    allowNull: true,
    defaultValue: null,
  },
  last_logged_in: {
    type: DataTypes.DATE,
    allowNull: true,
    defaultValue: null,
  },
  token: {
    type: DataTypes.STRING,
    allowNull: false,
  },
};

const User = sequalize.define("User", userSchema);
module.exports = User;

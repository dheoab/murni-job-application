"use strict";

const { hashPassword } = require("../helpers/encryption");

const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
  class User extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  User.init(
    {
      username: {
        type: DataTypes.STRING,
        allowNull: false,
        unique: {
          msg: "Username has been used, please choose another username",
        },
        validate: {
          notEmpty: {
            msg: "username should be filled",
          },
          notNull: {
            msg: "username should be filled",
          },
          isEmail: {
            msg: "Email input is wrong, please check again",
          },
        },
      },
      password: {
        type: DataTypes.STRING,
        allowNull: false,
        validate: {
          notEmpty: {
            msg: "password should be filled",
          },
          notNull: {
            msg: "password should be filled",
          },
          len: {
            args: [6, 255],
            msg: "Password length should be more than 6 characters",
          },
          is: {
            args: /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).*$/,
            msg: "Password must contain at least one uppercase letter and one digit number.",
          },
        },
      },
      age: {
        type: DataTypes.INTEGER,
        allowNull: false,
        validate: {
          min: {
            args: 18,
            msg: "Age should be above 18",
          },
        },
      },
    },
    {
      sequelize,
      modelName: "User",
    }
  );
  User.beforeCreate((instance) => {
    let hashedPassword = hashPassword(instance.password);
    instance.password = hashedPassword;
  });
  return User;
};

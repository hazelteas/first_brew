'use strict';
const { hashPassword } = require("../helpers/bcrypt");

const { Model } = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class User extends Model {
  }
  User.init({
    username: DataTypes.STRING,
    email: {
      type: DataTypes.STRING,
      allowNull: true,
      validate: {
        notEmpty: {
          msg: 'Email is required'
        },
        isEmail: {
          msg: 'Email is not valid.'
        }
      },
      unique: {
        msg: "Email already exists."
      }
    },
    password: {
      type: DataTypes.STRING,
      allowNull: false,
      validate: {
        notNull: {
          msg: 'Password is required'
        },
        notEmpty: {
          msg: 'Password is required'
        },
        len: {
          args: [6],
          msg: "Password must contain at least 6 characters."
        }
      }
    },
  }, {
    sequelize,
    modelName: 'User',
  });
  User.beforeCreate((user) => {
    user.password = hashPassword(user.password)
  })
  return User;
};
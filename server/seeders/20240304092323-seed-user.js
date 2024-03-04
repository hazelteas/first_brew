'use strict';
const { hashPassword } = require('../helpers/bcrypt');
/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
    await queryInterface.bulkInsert('Users', [
      {
     username : 'user',
     email : 'user@gmail.com',
     password : hashPassword('user1234'),
     createdAt : new Date(),
     updatedAt : new Date()
    },
    {
      username : 'admin',
      email : 'admin@gmail.com',
      password : hashPassword('admin1234'),
      createdAt : new Date(),
      updatedAt : new Date()
     },
     {
      username : 'test',
      email : 'test@gmail.com',
      password : hashPassword('test1234'),
      createdAt : new Date(),
      updatedAt : new Date()
     },
  ])
   },

  async down (queryInterface, Sequelize) {
    await queryInterface.bulkDelete('Users', null, {});
  }
};

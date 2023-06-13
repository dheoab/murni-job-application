"use strict";
const { hashPassword, comparePassword } = require("../helpers/encryption");

const userData = require("../datas/user.json").map((user) => {
  delete user.id;

  user.createdAt = user.updatedAt = new Date();
  user.password = hashPassword(user.password);

  return user;
});

console.log(userData);

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.bulkInsert("Users", userData, {});
    /**
     * Add seed commands here.
     *
     * Example:
     * await queryInterface.bulkInsert('People', [{
     *   name: 'John Doe',
     *   isBetaMember: false
     * }], {});
     */
  },

  async down(queryInterface, Sequelize) {
    await queryInterface.bulkDelete("Users", null, {});
    /**
     * Add commands to revert seed here.
     *
     * Example:
     * await queryInterface.bulkDelete('People', null, {});
     */
  },
};

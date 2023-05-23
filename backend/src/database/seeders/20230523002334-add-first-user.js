/* eslint-disable no-unused-vars */
/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, _Sequelize) {
    await queryInterface.bulkInsert('users', [{
      id: 'da2d9cec-af61-4087-9ead-62512852dbd1',
      name: 'Luan Lucas Rezende',
      cpf: '89083009378',
      email: 'll_rezende@gmail.com',
      phone: '81997691074',
      password: '$2b$11$FHK781y/7MoI3BqeMLxgm.AZl4.9XKW19Qb4yIo9IXDIWmNKlvWNi',
      birthdate: new Date('1984-05-15'),
      updated_at: new Date('2023-05-22 21:38:35'),
      created_at: new Date('2023-05-22 21:38:35'),
    }], {});
  },

  async down(queryInterface, _Sequelize) {
    await queryInterface.bulkDelete('users', null, {});
  },
};

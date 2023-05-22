module.exports = {
  up: async (queryInterface, Sequelize) => {
    const usersTable = await queryInterface.createTable(
      'users',
      {
        id: {
          allowNull: false,
          primaryKey: true,
          type: Sequelize.UUID,
        },
        cpf: {
          allowNull: false,
          type: Sequelize.STRING,
        },
        email: {
          allowNull: false,
          type: Sequelize.STRING,
        },
        phone: {
          allowNull: false,
          type: Sequelize.STRING,
        },
        password: {
          allowNull: false,
          type: Sequelize.STRING,
        },
        birthdate: {
          allowNull: false,
          type: Sequelize.DATE,
        },
        updatedAt: Sequelize.DATE,
        createdAt: Sequelize.DATE,
      },
    );
    return usersTable;
  },

  // eslint-disable-next-line no-unused-vars
  down: async (queryInterface, _Sequelize) => queryInterface.dropTable('users'),
};

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert(
      'users',
      [
        {
          email: 'jamerson@gmail.com',
          password: 123456,
        },
      ],
      {}
    );
  },

  down: () => {},
};

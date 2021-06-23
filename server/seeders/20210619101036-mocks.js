const { users, plants, plantsByUser } = require('../mockData/mocks.json');

module.exports = {
  up: async (queryInterface) => {
    await queryInterface.bulkInsert(
      'Users',
      users.map((user) => ({
        ...user,
        createdAt: new Date(),
        updatedAt: new Date(),
      })),
      {},
    );
    await queryInterface.bulkInsert(
      'Plants',
      plants.map((plant) => ({
        ...plant,
        createdAt: new Date(),
        updatedAt: new Date(),
      })),
      {},
    );
    await queryInterface.bulkInsert(
      'PlantsByUsers',
      plantsByUser.map((plantByUser) => ({
        ...plantByUser,
        lastWatered: new Date(),
        createdAt: new Date(),
        updatedAt: new Date(),
      })),
      {},
    );
  },

  down: async (queryInterface) => {
    await queryInterface.bulkDelete('Users', null, {});
    await queryInterface.bulkDelete('Plants', null, {});
    await queryInterface.bulkDelete('PlantsByUsers', null, {});
  },
};

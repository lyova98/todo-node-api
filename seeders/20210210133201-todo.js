'use strict';

module.exports = {
  up: (queryInterface) => {
    const timestamps = new Date();
    return queryInterface.bulkInsert(
      'Todos',
      [
        {
          name: 'My Todo',
          status: 'TODO',
          createdAt: timestamps,
          updatedAt: timestamps,
        },
        {
          name: 'Todo 8',
          status: 'PROCESS',
          createdAt: timestamps,
          updatedAt: timestamps,
        },
        {
          name: 'Todo 9',
          status: 'COMPLETE',
          createdAt: timestamps,
          updatedAt: timestamps,
        },
      ],
      {},
      {}
    );
  },

  down: (queryInterface) => {
    return queryInterface.bulkDelete('Todos', null, {});
  },
};

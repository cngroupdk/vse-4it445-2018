module.exports = {
  up: (queryInterface, Sequelize) => {
    const productsPromise = queryInterface.bulkInsert(
      'Products',
      [
        {
          title: 'Škoda Superb',
          price: 750000,
          shortInfo: 'Luxury car produced in the Czech Republic.',
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          title: 'Ford Focus',
          price: 600000,
          shortInfo: 'Sports car made in USA.',
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          title: 'Moped',
          price: 1000,
          shortInfo: 'No comment.',
          createdAt: new Date(),
          updatedAt: new Date(),
        },
      ],
      {}
    );

    return Promise.all([productsPromise]);
  },

  down: (queryInterface, Sequelize) => {
    return Promise.all([
      queryInterface.bulkDelete('ProductCategories', null, {}),
      queryInterface.bulkDelete('Products', null, {}),
    ]);
  },
};

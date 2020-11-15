function applyAssociations (sequelize) {
  const { customers, products } = sequelize.models;

  customers.hasMany(products, {
    foreignKey: {
      name: 'customerId',
      allowNull: false,
    },
  });
  products.belongsTo(customers);
}

module.exports = { applyAssociations };

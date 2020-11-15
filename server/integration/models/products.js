const { DataTypes } = require('sequelize');
const customers = require('./customers');

module.exports = (sequelize) => {
  const products = sequelize.define('products', {
    productName: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    productTypeName: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    numeracionTerminal: {
      type: DataTypes.INTEGER,
      allowNull: false,
    },
    soldAt: {
      type: DataTypes.DATE,
      allowNull: false,
    },
  });
};

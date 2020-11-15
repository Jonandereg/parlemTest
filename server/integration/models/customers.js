const { DataTypes } = require('sequelize');

module.exports = (sequelize) => {
  const customers = sequelize.define('customers', {
    customerId: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true,
      unique: true,
    },
    docType: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    docNum: {
      type: DataTypes.STRING,
      allowNull: false,
      unique: true,
    },
    email: {
      type: DataTypes.STRING,
      allowNull: false,
      unique: true,
    },
    givenName: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    familyName1: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    phone: {
      type: DataTypes.STRING,
      allowNull: false,
    },
  });
};

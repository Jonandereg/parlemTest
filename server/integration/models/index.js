const Sequelize = require('sequelize');
const modelDefiners = [require('./customers'), require('./products')];
const { DATABASE } = require('../../config');
const { applyAssociations } = require('./associations');

const Op = Sequelize.Op;
const operatorsAliases = {
  $like: Op.like,
  $not: Op.not,
};

const db = {};

const sequelize = new Sequelize(DATABASE.db_name, DATABASE.db_user, DATABASE.db_password, {
  host: DATABASE.db_host,
  dialect: 'postgres',
  logging: false,
  pool: {
    max: 5,
    min: 0,
    acquire: 30000,
    idle: 10000,
  },
  operatorsAliases,
});

for (const modelDefiner of modelDefiners) {
  modelDefiner(sequelize);
}

applyAssociations(sequelize);

db.sequelize = sequelize;
db.Sequelize = Sequelize;

module.exports = db;

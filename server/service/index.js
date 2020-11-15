const db = require('../integration/models');
const customers = require('../integration/models/customers');

const getClient = async (req, res) => {
  const customerId = req.body;
  const user = await db.sequelize.models.customers.findOne({
    where: { customerId },
    include: [{ model: db.sequelize.models.products }],
  });
  res.send(user);
};

module.exports = { getClient };

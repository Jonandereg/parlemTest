const db = require('../integration/models');

const getClient = async (req, res) => {
  const customerId = req.body.customerId;
  const user = await db.sequelize.models.customers.findOne({
    where: { customerId },
    include: [{ model: db.sequelize.models.products }],
  });
  res.send(JSON.stringify(user));
};

module.exports = { getClient };

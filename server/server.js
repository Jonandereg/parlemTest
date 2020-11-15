const app = require('./API/app');
const { SERVER } = require('./config');
const db = require('./integration/models');

(async () => {
  try {
    await db.sequelize.sync();
    app.listen(SERVER.server_port, () => {
      console.log(`serving files at: http://localhost:${SERVER.server_port} `); // eslint-disable-line no-console
    });
  } catch (error) {
    console.log(error); // eslint-disable-line no-console
  }
})();

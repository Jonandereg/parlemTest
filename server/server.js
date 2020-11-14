const app = require('./API/app');
const { SERVER } = require('./config');

app.listen(SERVER.server_port, () => {
  console.log(`serving files at: http://localhost:${SERVER.server_port} `); // eslint-disable-line no-console
});

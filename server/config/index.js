const dotenv = require('dotenv');
dotenv.config();

const SERVER = {
  server_port: process.env.SERVER_PORT,
};
const DATABASE = {
  db_host: process.env.DB_HOST,
  dialect: process.env.DB_DIALECT,
  db_port: process.env.DB_PORT,
  db_name: process.env.DB_NAME,
  db_user: process.env.DB_USER,
  db_password: process.env.DB_PASSWORD,
};
module.exports = { SERVER, DATABASE };

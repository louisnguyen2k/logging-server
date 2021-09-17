require('dotenv').config();
module.exports = {
  development: {
    port: 8010,
    token: 'windsoft@2018',
    mongo_dbname: 'logdb',
    mongo_host: '3.1.13.10',
    mongo_port: 27017,
    mongo_user: 'root',
    mongo_password: 'WindSoft2018',
  },
  test: {
    port: 3000,
  },
  production: {
    port: process.env.PORT,
    token: process.env.TOKEN,
    mongo_host: process.env.MONGO_HOST,
    mongo_port: process.env.MONGO_PORT,
    mongo_user: process.env.MONGO_USER,
    mongo_password: process.env.MONGO_PASSWORD,
  },
};

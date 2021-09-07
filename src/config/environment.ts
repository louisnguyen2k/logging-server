require('dotenv').config();
module.exports = {
  development: {
    port: 8010,
    token: 'windsoft@2018',
  },
  test: {
    port: 3000,
  },
  production: {
    port: process.env.PORT,
    token: process.env.TOKEN,
  },
};

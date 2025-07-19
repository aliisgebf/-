require('dotenv').config();

module.exports = {
  db: {
    host: 'localhost',
    user: 'root',
    password: '',
    database: 'fadfada'
  },
  port: process.env.PORT || 3000
};

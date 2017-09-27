const Sequelize = require('sequelize');
const db = new Sequelize('postgres://localhost:5432/wikistack2', {logging: false});

const Page = db.define('page', {
  title: Sequelize.STRING,
  urlTitle: Sequelize.STRING,
  content: Sequelize.TEXT,
  status: Sequelize.ENUM('open', 'closed')
});

const User = db.define('user', {
  name: Sequelize.STRING,
  email: Sequelize.STRING
});

module.exports = {
  db,
  Page,
  User
};

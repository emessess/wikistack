'use strict';

const Sequelize = require('sequelize');
const db = new Sequelize('postgres://localhost:5432/wikistack2', {logging: false});

const Page = db.define('page', {
  title: {
    type: Sequelize.STRING,
    allowNull: false
  },
  urlTitle: {
    type: Sequelize.STRING,
    allowNull: false
  },
  content: {
    type: Sequelize.TEXT,
    allowNull: false
  },
  status: Sequelize.ENUM('open', 'closed')
});

Page.route = function() {
  return `/wiki/${this.urlTitle}`;
};

const User = db.define('user', {
  name: {
    type: Sequelize.STRING,
    allowNull: false
  },
  email: {
    type: Sequelize.STRING,
    allowNull: false
  }
});

module.exports = {
  db,
  Page,
  User
};

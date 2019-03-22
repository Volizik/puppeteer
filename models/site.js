const { STRING } = require('sequelize');
const db = require('../middlewares/db');

const Site = db.define('site', {
  url: {type: STRING},
  title: {type: STRING},
  logo: {type: STRING},
  views: {type: STRING},
  scroll: {type: STRING},
  status: {type: STRING, defaultValue: 'in progress'}
});

module.exports = Site;

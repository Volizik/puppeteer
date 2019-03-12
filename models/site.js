const { STRING } = require('sequelize');
const db = require('../middlewares/db');

const Site = db.define('site', {
  url: {type: STRING},
  title: {type: STRING},
  logo: {type: STRING},
  siteViews: {type: STRING},
  siteScrolls: {type: STRING},
  status: {type: STRING}
});

module.exports = Site;
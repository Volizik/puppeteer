const db = require('../../middlewares/db');
const SiteModel = require('../../models/site');

module.exports.getAll = async () => {
  return await db.sync()
    .then(() => SiteModel.findAll({raw: true}))
    .then(sites => {
      return sites;
    });
};
module.exports.getURLs = async () => {
  return await db.sync()
    .then(() => SiteModel.findAll({attributes: ['url'], raw: true}))
    .then(urls => {
      return urls;
    });
};
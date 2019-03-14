const Site = require('../models/site');
const db = require('../middlewares/db');
const axios = require('axios');
const cheerio = require('cheerio');
const getWebsiteFavicon = require('get-website-favicon');
const {setProtocol} = require('../middlewares/url');


module.exports.getAll = async (ctx) => {
  ctx.body = 'hello';
  console.log(213);
};

module.exports.addSite = async (ctx) => {
  let responseBody = ctx.request.body;
  // Get site name
  responseBody.url = setProtocol(responseBody.url);
  const titlePromise = axios.get(responseBody.url).then(res => {
    const $ = cheerio.load(res.data);
    responseBody.name = $('head title').text();
  });
  // Get site favicon
  const faviconPromise = getWebsiteFavicon(responseBody.url).then(res => {
    responseBody.logo = res.icons[0].src
  });
  await Promise.all([titlePromise, faviconPromise])
    .then(() => {
      ctx.body = responseBody;
    })
  // db.sync()
  //   .then(() => Site.create(site))
  //   .then(site => {
  //       console.log(site.toJSON());
  //   });

};

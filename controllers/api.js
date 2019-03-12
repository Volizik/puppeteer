const Site = require('../models/site');
const db = require('../middlewares/db');
const axios = require('axios');
const cheerio = require('cheerio');

module.exports.getAll = async (ctx, next) => {
    ctx.body = 'hello';
    console.log(213);
    next();
};

module.exports.addSite = async (ctx, next) => {
    let reqParams = ctx.request.body;
    console.log(ctx.request)
    // axios.get(reqParams.url).then((res) => {
    //     const $ = cheerio.load(res);
    //     console.log($('head title'))
    // });
    // console.log(ctx.request.body)

    // db.sync()
    //   .then(() => Site.create(site))
    //   .then(site => {
    //       console.log(site.toJSON());
    //   });
    next()
};

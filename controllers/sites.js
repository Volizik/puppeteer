const SiteModel = require('../models/site');
const db = require('../middlewares/db');
const getWebsiteFavicon = require('get-website-favicon');
const {setProtocol, getSiteTitle} = require('../middlewares/webSite');
const {sites} = require('../db');


module.exports.getAll = async (ctx) => {
  ctx.body = sites;
};

module.exports.addSite = async (ctx) => {
  let response = ctx.request.body;
  // устанавливаем протокол http, если его нет
  response.url = setProtocol(response.url);
  // получаем title сайта
  const titlePromise = getSiteTitle(response.url).then(title =>  response.title = title.length ? title : 'No title on the page');
  // получаем favicon сайта, если его нет - устанавливаем картинку по умолчанию
  const faviconPromise = getWebsiteFavicon(response.url).then(res => response.logo = res.icons.length ? res.icons[0].src : '/favicon.png');
  // Ожидаем ответ от всех промисов, после чего отдаем ответ клиенту, и записываем сайт в базу
  await Promise.all([titlePromise, faviconPromise]).then(async () => {
    // await db.sync()
    //     .then(() => SiteModel.create(response))
    //     .then(site => {
    //       console.log(site.toJSON());
      sites.push(response); // TODO: remove this line after db connect
      ctx.body = response; // change on site
    //     });
  });

};

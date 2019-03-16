const URLparse = require('url-parse');
const axios = require('axios');
const cheerio = require('cheerio');

module.exports.setProtocol = (siteURL) => {
    let url = URLparse(siteURL, true);
    if (!url.protocol) {
        url.set('protocol', 'http:');
    }
    return url.toString();
};

module.exports.getSiteTitle = async (url) => {
    return axios.get(url).then(res => {
        const $ = cheerio.load(res.data);
        return $('head title').text();
    });
};


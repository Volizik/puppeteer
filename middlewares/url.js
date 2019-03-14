const URLparse = require('url-parse');

module.exports.setProtocol = (siteURL) => {
  let url = URLparse(siteURL, true);
  url.set('protocol', 'https:');
  return url.toString();
};
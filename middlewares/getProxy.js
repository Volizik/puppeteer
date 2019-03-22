const axios = require('axios');

module.exports = async () => {
  await axios.get('https://proxy.art-craft.xyz/api').then((response) => {
    return response
  })
};

const fetch = require('node-fetch');
const rutas = require('../utils/estractorLink');

const linksCorect = (route) => {
  const hrefMd = rutas.markdownLinkExtractor(route);
  const arrayPromises = hrefMd.map((link) => fetch(link.href)
    .then((response) => {
      if (response.status >= 200 && response.status <= 359) {
        return {
          ...link,
          status: response.status,
          statusText: response.statusText,
        };
      } return {
        ...link,
        status: response.status,
        statusText: 'FAIL',
      };
    })
    .catch(() => ({
      ...link,
      status: '',
      statusText: 'ESTE LINK NO EXISTE',
    })));
  return Promise.all(arrayPromises);
};


module.exports = {
  linksCorect,
};

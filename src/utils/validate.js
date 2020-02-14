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

// eslint-disable-next-line max-len
// (linksCorect('/home/lizbeth/Documents/LAB-11/LIM011-fe-md-links/src/prueba/first.md')).then((res) => console.log(res));
// eslint-disable-next-line max-len
/* linksCorect('/home/lizbeth/Documents/LAB-11/LIM011-fe-md-links/src/prueba/red.md').then(links => {
 => [{ href, text, file }]
console.log(links);
 });
*/
module.exports = {
  linksCorect,
};

// console.log(linksCorect('/home/lizbeth/Documents/LAB-11/LIM011-fe-md-links/src/prueba/red.md'));

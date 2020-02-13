/* eslint-disable no-param-reassign */

const fetch = require('node-fetch');
const rutas = require('../utils/estractorLink');


const linksCorect = (route) => {
  const hrefMd = rutas.markdownLinkExtractor(route);
  const arrayPromises = hrefMd.map((link) => fetch(link.href)
    .then((response) => {
      if (response.status >= 200 && response.status <= 359) {
        link.status = response.status;
        link.statusText = response.statusText;
      } else {
        link.status = response.status;
        link.statusText = 'fail';
      }
      return link;
    }));
  return Promise.all(arrayPromises);
};

// (linksCorect('../LIM011-fe-md-links/README.md')).then((res) => console.log(res));
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

const routeStart = require('../src/utils/route.js');
const estractorLink = require('../src/utils/estractorLink.js');
const validar = require('../src/utils/validate.js');

const mdLinks = (path, options) => new Promise((resolve) => {
  const routeAbs = routeStart.convertPathRelativeToAbsolute(path);
  // console.log(routeAbs);
  if (options.validate === true) {
    resolve(validar.linksCorect(routeAbs));
    // console.log(validar.linksCorect(routeAbs));
  } else if (!options.validate) {
    resolve(estractorLink.markdownLinkExtractor(routeAbs));
    // console.log(rutas.markdownLinkExtractor(routeAbs))
  }
});

// (mdLinks('../LIM011-fe-md-links/src/prueba', true)).then((res) => console.log(res));
// console.log((mdLinks('../LIM011-fe-md-links/src/prueba',true)));
module.exports = {
  mdLinks,
};


// const routeStart = require('../src/utils/route.js');
const estractorLink = require('../src/utils/estractorLink.js');
const validar = require('../src/utils/validate.js');
// uno de ellos es array y el otro es una promesa y hago que ambos me retornen en promesa
const mdLinks = (path, options) => new Promise((resolve) => {
  // console.log(routeAbs);
  if (options.validate === true) {
    resolve(validar.linksCorect(path));
    // console.log(validar.linksCorect(routeAbs));
  }
  return resolve(estractorLink.markdownLinkExtractor(path));
  // console.log(rutas.markdownLinkExtractor(routeAbs))
});


// const print
// eslint-disable-next-line max-len
// (mdLinks('../LIM011-fe-md-links/src/prueba/first.md', { validate: false })).then((res) => console.log(res));
// console.log((mdLinks('../LIM011-fe-md-links/src/prueba',true)));

/*

const prueba = [{
  href: 'https://es.wikipedia.org/wiki/Markdown',
  text: 'Markdown',
  path:
 '/home/lizbeth/Documents/LAB-11/LIM011-fe-md-links/src/prueba/Example/probando.md',
  status: 200,
  textStatus: 'OK',
},
{
  href: 'https://nodejs.org/',
  text: 'Node.js',
  path:
 '/home/lizbeth/Documents/LAB-11/LIM011-fe-md-links/src/prueba/Example/probando.md',
  status: 200,
  textStatus: 'OK',
},
{
  href: 'https://nodejs.org/',
  text: 'Node.js',
  path:
 '/home/lizbeth/Documents/LAB-11/LIM011-fe-md-links/src/prueba/Example/probando.md',
  status: 200,
  textStatus: 'OK',
},
];
*/
// const printValidateTrue = (array) => { };
const printValidateFalse = (array) => {
  let stringres = '';
  array.forEach((elem) => { stringres += `${elem.path} ${elem.href} ES UN  ${elem.text}\n`; });
  return stringres;
};
const printValidateTrue = (array) => {
  let stringres = '';
  array.forEach((elem) => {
    stringres += `${elem.path} ${elem.href} ${elem.text} ${elem.status} ${elem.statusText}\n`;
  });
  return stringres;
};

// console.log(ValidateFalse(prueba));
// console.log(prueba[0]);

module.exports = {
  mdLinks,
  printValidateFalse,
  printValidateTrue,
};

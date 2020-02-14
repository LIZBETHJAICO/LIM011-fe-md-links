
const estractorLink = require('../src/utils/estractorLink.js');
const validar = require('../src/utils/validate.js');

const mdLinks = (path, options) => new Promise((resolve) => {
  if (options.validate === true) {
    resolve(validar.linksCorect(path));
  }
  return resolve(estractorLink.markdownLinkExtractor(path));
});


const printValidateFalse = (array) => {
  let stringres = '';
  array.forEach((elem) => { stringres += `${elem.path}  ⭕  ${elem.href}  ⭕    ES UN     ${elem.text}\n`; });
  return stringres;
};
const printValidateTrue = (array) => {
  let stringres = '';
  array.forEach((elem) => {
    stringres += `${elem.path} ${elem.href}  ✅    ${elem.text}   ✅     ${elem.status}    ✅    ${elem.statusText}\n`;
  });
  return stringres;
};


module.exports = {
  mdLinks,
  printValidateFalse,
  printValidateTrue,
};

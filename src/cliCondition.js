const mdlink = require('./md-link.js');
const stats = require('./utils/stats.js');


const fsMdlinks = (path, options) => {
  let resultado = '';
  if (path === undefined) {
    resultado = new Promise((resolve) => resolve('ingrese una ruta relativa o absoluta'));
  } else if (options.validate === undefined) {
    resultado = mdlink.mdLinks(path, { validate: false })
      .then((res) => {
        let stringElem = '';
        res.forEach((elem) => {
          stringElem += `${elem.path} ${elem.href} ${elem.text}\n`;
        });
        return stringElem;
      });
  } else if ((options.validate === '--validate' && options.stats === '--stats') || (options.validate === '--v' && options.stats === '--s')) {
    resultado = mdlink.mdLinks(path, { validate: true }).then((res) => (`Total: ${stats.statsTotal(res)} \n Unique: ${stats.statsUnique(res)} \n Broken: ${stats.statsBroken(res)}`));
  } else if ((options.validate === '--validate') || (options.validate === '--v')) {
    resultado = mdlink.mdLinks(path, { validate: true })
      .then((res) => {
        let stringElem = '';
        res.forEach((elem) => {
          stringElem += `${elem.path} ${elem.href} ${elem.text} ${elem.status} ${elem.statusText}\n`;
        });
        return stringElem;
      });
  } else if (options.validate === '--stats' || (options.validate === '--s')) {
    resultado = mdlink.mdLinks(path, { validate: true }).then((res) => (`Total: ${stats.statsTotal(res)}\n Unique: ${stats.statsUnique(res)}`));
  }
  return resultado;
};

module.exports = {
  fsMdlinks,
};

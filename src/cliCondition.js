const mdlink = require('./md-link.js');
const stats = require('./utils/stats.js');


const cliMdlink = (path, options) => {
  let resultado = '';
  if (path === undefined) {
    resultado = new Promise((resolve) => resolve('ingrese una ruta relativa o absoluta'));
  } else if (options.validate === undefined) {
    resultado = mdlink.mdLinks(path, { validate: false })
      .then((res) => mdlink.printValidateFalse(res));
  } else if ((options.validate === '--validate' && options.stats === '--stats') || (options.validate === '--v' && options.stats === '--s')) {
    resultado = mdlink.mdLinks(path, { validate: true })
      .then((res) => stats.printStatsValidate(res));
  } else if ((options.validate === '--validate') || (options.validate === '--v')) {
    resultado = mdlink.mdLinks(path, { validate: true })
      .then((res) => mdlink.printValidateTrue(res));
  } else if (options.validate === '--stats' || (options.validate === '--s')) {
    resultado = mdlink.mdLinks(path, { validate: true }).then((res) => stats.printStats(res));
  }
  return resultado;
};
module.exports = {
  cliMdlink,
};

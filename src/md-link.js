//const rutas =require('../src/utils/path.js');
//const validar =require('../src/utils/validatejs.')
const routeinicio =require('../src/utils/route.js');
const rutas= require('../src/utils/path.js');
const validar= require('../src/utils/validate.js');

 const mdLinks = (inputPath,options) => {
   return new Promise((resolve) => {
    const routeAbs = routeinicio.convertPathRelativeToAbsolute(inputPath);
    // console.log(routeAbs);
    if(options.validate === true) {
      resolve(validar.linksCorect(routeAbs));
        //console.log(validar.linksCorect(routeAbs));
      }
    else if (!options.validate) {
    resolve(rutas.markdownLinkExtractor(routeAbs));
      //console.log(rutas.markdownLinkExtractor(routeAbs))
    };
  
  });
  
};
(mdLinks('../LIM011-fe-md-links/src/prueba',true)).then( res=> console.log(res));
//console.log((mdLinks('../LIM011-fe-md-links/src/prueba',true)));
module.exports = {
  mdLinks,
}
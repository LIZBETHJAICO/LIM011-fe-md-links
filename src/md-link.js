//const rutas =require('../src/utils/path.js');
//const validar =require('../src/utils/validatejs.')
const routeinicio =require('../src/utils/route.js')

 const mdLinks = (path) => {
  let pathAbsolute;
  const routeMdLink = routeinicio.evaluatePath(path);
  if (routeMdLink === false) {
    pathAbsolute = routeinicio.convertPathRelativeToAbsolute(path)
  } else {pathAbsolute= path};

  return pathAbsolute;
  
};
console.log(mdLinks('../LAB-11/LIM011-fe-md-links/src/prueba/red.md'));
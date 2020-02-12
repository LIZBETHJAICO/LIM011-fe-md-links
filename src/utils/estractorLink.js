const Marked = require('marked');
const path = require('path');
const fs = require('fs');

// const convertPathRelativeToAbsolute = (route) => path.resolve(route);
// LEE  CONTENIDO DEL DIRECTORIO
const readDirectoryRecursive = (route) => {
  let filePathsArray = [];
  // console.log(absoluteFilePath)
  // isDirectory para ver si es un directorio true o false
  if (fs.statSync(route).isDirectory()) {
    const getNameDirectoryArray = fs.readdirSync(route);
    // un array en string
    getNameDirectoryArray.forEach((elem) => {
      const absoluteFilePath = path.join(route, elem);
      filePathsArray = filePathsArray.concat(readDirectoryRecursive(absoluteFilePath));
    });
  } else {
    // console.log(filePathsArray.push(ruta));
    filePathsArray.push(route);
  }
  return filePathsArray;
};

// EVALUA EL ARRAY MD
const evaluateFilesMd = (array) => array.filter((elem) => path.extname(elem) === '.md');

const getPathArray = (pathInput) => {
  let pathAbsolute;
  // es absoluta?
  const routeMdLink = path.isAbsolute(pathInput);
  // relativa: convertir a absoluta
  const convertPathRelativeToAbsolute = path.resolve(pathInput);

  if (!routeMdLink) {
    pathAbsolute = convertPathRelativeToAbsolute;
  } else { pathAbsolute = pathInput; }
  const arrMds = evaluateFilesMd(readDirectoryRecursive(pathAbsolute));
  return arrMds;
};
console.log(getPathArray('../LIM011-fe-md-links/src/prueba/red.md'));

const markdownLinkExtractor = (markdown) => {
  const arrayAllgetPAthArray = getPathArray(markdown);
  // console.log(markdown);
  const links = [];
  const renderer = new Marked.Renderer();
  // console.log(arrayAllgetPAthArray);
  arrayAllgetPAthArray.forEach((elementMd) => {
    const markdowns = fs.readFileSync(elementMd).toString();
    // console.log(markdowns);
    const mdlink = (href, _, text) => {
      links.push({
        href,
        text,
        path: elementMd,
      });
    };
    renderer.link = mdlink;

    Marked(markdowns, { renderer });
  });
  return links;
};

// eslint-disable-next-line max-len
// const links = markdownLinkExtractor('/home/lizbeth/Documents/LAB-11/LIM011-fe-md-links/src/prueba/red.md');
// console.log(links);


module.exports = {

  markdownLinkExtractor,
  getPathArray,
};

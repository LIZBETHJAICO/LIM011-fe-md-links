const path = require('path');
const fs = require('fs');
const Marked = require('marked');
const route = require('../utils/route.js');

const getPathArray = (pathInput) => {
  let pathAbsolute;
  const routeMdLink = path.isAbsolute(pathInput);
  if (routeMdLink === false) {
    pathAbsolute = route.convertPathRelativeToAbsolute(pathInput);
  } else { pathAbsolute = pathInput; }
  const arrMds = route.evaluateFilesMd(route.readDirectoryRecursive(pathAbsolute));
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


// console.log(getPathArray('../LIM011-fe-md-links/src/prueba'));

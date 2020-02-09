const fs = require('fs');
const Marked = require('marked');
const route = require('../utils/route.js');

const getPathArray = (path) => {
  let pathAbsolute;
  const routeMdLink = route.evaluatePath(path);
  if (routeMdLink === false) {
    pathAbsolute = route.convertPathRelativeToAbsolute(path);
  } else { pathAbsolute = path; }
  const arrMds = route.evaluateFilesMd(route.readDirectoryRecursive(pathAbsolute));
  return arrMds;
};

const markdownLinkExtractor = (markdown) => {
  const arrayAllgetPAthArray = getPathArray(markdown);
  // console.log(markdown);
  const links = [];
  const renderer = new Marked.Renderer();
  console.log(arrayAllgetPAthArray);
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
// const links = markdownLinkExtractor('/home/lizbeth/Documents/LAB-11/LIM011-fe-md-links/src/prueba');
// console.log(links);


module.exports = {

  markdownLinkExtractor,
};


// console.log(getPathArray('/home/lizbeth/Documents/LAB-11/LIM011-fe-md-links/src/prueba'));

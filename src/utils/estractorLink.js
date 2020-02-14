const Marked = require('marked');
const path = require('path');
const fs = require('fs');


const readDirectoryRecursive = (route) => {
  let filePathsArray = [];

  if (fs.statSync(route).isDirectory()) {
    const getNameDirectoryArray = fs.readdirSync(route);

    getNameDirectoryArray.forEach((elem) => {
      const absoluteFilePath = path.join(route, elem);
      filePathsArray = filePathsArray.concat(readDirectoryRecursive(absoluteFilePath));
    });
  } else {
    filePathsArray.push(route);
  }
  return filePathsArray;
};

const evaluateFilesMd = (array) => array.filter((elem) => path.extname(elem) === '.md');

const getPathArray = (pathInput) => {
  let pathAbsolute;
  const routeMdLink = path.isAbsolute(pathInput);

  const convertPathRelativeToAbsolute = path.resolve(pathInput);

  if (!routeMdLink) {
    pathAbsolute = convertPathRelativeToAbsolute;
  } else { pathAbsolute = pathInput; }
  const arrMds = evaluateFilesMd(readDirectoryRecursive(pathAbsolute));
  return arrMds;
};

const markdownLinkExtractor = (markdown) => {
  const arrayAllgetPAthArray = getPathArray(markdown);

  const links = [];
  const renderer = new Marked.Renderer();

  arrayAllgetPAthArray.forEach((elementMd) => {
    const markdowns = fs.readFileSync(elementMd).toString();
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

module.exports = {
  readDirectoryRecursive,
  evaluateFilesMd,
  getPathArray,
  markdownLinkExtractor,
};

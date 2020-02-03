const route = require("../utils/route.js");
const fs = require('fs');
const Marked = require('marked');
const markdownLinkExtractor = (markdown)=>{
    //console.log(markdown);
    const links = [];
    const markdowns= fs.readFileSync(markdown).toString();
    const renderer = new Marked.Renderer();
    
    const mdlink = (href,_,text)=>{
        links.push({
          href: href,
          text: text,
          path: markdown,
        })
    };
    renderer.link= mdlink;
   
    Marked(markdowns, {renderer: renderer});
    return links;
  };
  const links = markdownLinkExtractor('/home/lizbeth/Documents/LAB-11/LIM011-fe-md-links/src/prueba/red.md');
 //console.log(links)

const getPathArray =(path) => {
  let pathAbsolute;
  const routeMdLink = route.evaluatePath(path);
  if (routeMdLink === false) {
    pathAbsolute = route.convertPathRelativeToAbsolute(path)
  } else {pathAbsolute= path};
  //return pathAbsolute;
  //return new Promise((resolve) => {
    let newarray = [];  
    const arrMds = route.evaluateFilesMd(route.readDirectoryRecursive(pathAbsolute));
    console.log(arrMds);
    arrMds.forEach(element => {
      const extraer= markdownLinkExtractor(element)
      newarray.push(extraer) 
     // console.log(extraer);
      //return newarray;
    });
    return newarray;
    //resolve(newarray);
  //});
}
module.exports = {
 
    markdownLinkExtractor,
  };


// console.log(getPathArray('/home/lizbeth/Documents/LAB-11/LIM011-fe-md-links/src/prueba'));
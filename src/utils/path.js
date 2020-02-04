const route = require("../utils/route.js");
const fs = require('fs');
const Marked = require('marked');

const getPathArray =(path) => {
  let pathAbsolute;
  const routeMdLink = route.evaluatePath(path);
  if (routeMdLink === false) {
    pathAbsolute = route.convertPathRelativeToAbsolute(path)
  } else {pathAbsolute= path};
  //return pathAbsolute;
  //return new Promise((resolve) => {
    //let newarray = [];  
    const arrMds = route.evaluateFilesMd(route.readDirectoryRecursive(pathAbsolute));
   // console.log(arrMds);
    //arrMds.forEach(element => {
     // const extraer= markdownLinkExtractor(element)
     // newarray.push(extraer) 
     // console.log(extraer);
      //return newarray;
      return arrMds;
    };
    //return newarray;
    //resolve(newarray);
  //});
//}

const markdownLinkExtractor = (markdown)=>{
  const arrayAllgetPAthArray = getPathArray(markdown)
    //console.log(markdown);
    const links = [];
    const renderer = new Marked.Renderer();
    console.log(arrayAllgetPAthArray);
    arrayAllgetPAthArray.forEach(elementMd => {
      const markdowns= fs.readFileSync(elementMd).toString();
   //console.log(markdowns);
    const mdlink = (href,_,text)=>{
        links.push({
          href: href,
          text: text,
          path: elementMd,
        })
    };
    renderer.link= mdlink;
   
    Marked(markdowns, {renderer: renderer});
  });
    return links;
  };
//const links = markdownLinkExtractor('/home/lizbeth/Documents/LAB-11/LIM011-fe-md-links/src/prueba');
 //console.log(links)


module.exports = {
 
    markdownLinkExtractor,
  };


 //console.log(getPathArray('/home/lizbeth/Documents/LAB-11/LIM011-fe-md-links/src/prueba'));
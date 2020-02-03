 
const rutas= require('../utils/path.js');
const fetch = require('node-fetch');

const linksCorect = (route) => {
  const hrefMd = rutas.markdownLinkExtractor(route);
  console.log(hrefMd);
  const arraylink = hrefMd.map(link => {return new Promise( (resolve,reject) => {
    fetch(link.href).then(response =>{
        //console.log(link.href)
          if(response.status= 200){
          //console.log(response.status);
          //console.log(link.status)
          link.textStatus = response.statusText;
          link.status= response.status;
            
          }
         resolve(link);
      })
  })
    });
  return arraylink;
}

Promise.all(linksCorect('/home/lizbeth/Documents/LAB-11/LIM011-fe-md-links/src/prueba/red.md')).then( res=> console.log(res));
//linksCorect('/home/lizbeth/Documents/LAB-11/LIM011-fe-md-links/src/prueba/red.md').then(links => {
    // => [{ href, text, file }]
  // console.log(links);
 // });
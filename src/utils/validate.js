 
const rutas= require('../utils/path.js');
const fetch = require('node-fetch');

const linksCorect = (route) => {
  const hrefMd = rutas.markdownLinkExtractor(route);

  //console.log(hrefMd);
  const arrPromises = hrefMd.map(link => {
    return fetch(link.href)
        .then(response =>{
            //console.log(link.href)
            //console.log(response.status)
            if(response.status>= 200 && response.status<= 359){
            //console.log(response.status);
            //console.log(link.status)
                link.status= response.status;
                link.textStatus = 'OK';  
            }else{
                link.status = response.status;
                link.textStatus = 'Fail'; 
            }
            return link;
        }).catch(() => {
            link.status = '';
            link.textStatus= 'este link no existe';
            return link;
        })
        });
  
        return Promise.all(arrPromises)
 
}


//(linksCorect('../LIM011-fe-md-links/src/prueba')).then( res=> console.log(res));
//linksCorect('/home/lizbeth/Documents/LAB-11/LIM011-fe-md-links/src/prueba/red.md').then(links => {
    // => [{ href, text, file }]
  // console.log(links);
 // });

 module.exports ={
    linksCorect,
};
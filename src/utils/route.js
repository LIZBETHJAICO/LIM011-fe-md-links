const path = require('path');
const fs = require('fs');


// OBTENER SI ES ABSOLUTA 
const evaluatePath = (route) => {
  // método determina si pathes una ruta absoluta.
  const issAbsolute = path.isAbsolute(route);
  return issAbsolute;
};
// CONVERTIR RUTA ABSOLUTA
const convertPathRelativeToAbsolute = (route) => {

  return path.resolve(route);
}

// LEE  CONTENIDO DEL DIRECTORIO
const readDirectoryRecursive = (ruta) => { 
  let filePathsArray = [];
   //console.log(absoluteFilePath)
 if(fs.statSync(ruta).isDirectory()){
    const getNameDirectoryArray = fs.readdirSync(ruta); 
    getNameDirectoryArray.forEach(elem => {
      const absoluteFilePath = path.join(ruta,elem); 
    filePathsArray= filePathsArray.concat(readDirectoryRecursive(absoluteFilePath));
    })
  }
    else{
       filePathsArray.push(ruta);
   }

  
 return filePathsArray;

  };
 
// EVALUA LA RUTA SI ES MD.

const evaluateFileIsMd = (route) => {
  const ismd = path.extname(route) === '.md' ;
 // console.log(path.extname(route), ismd);
 return ismd;


}
// EVALUA EL ARRAY MD
const evaluateFilesMd =(array) =>{
 const mdFilePathsArray = array.filter(elem => path.extname(elem) === '.md');
 return mdFilePathsArray;
  
 }
 // EXTRAER LINK DEL  DEL MD
 

 module.exports = {
    evaluatePath,
   convertPathRelativeToAbsolute,
   readDirectoryRecursive,
   evaluateFileIsMd,
   evaluateFilesMd
  };
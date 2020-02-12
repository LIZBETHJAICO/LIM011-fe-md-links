const path = require('path');
const fs = require('fs');
// OBTENER SI ES ABSOLUTA
const evaluatePath = (route) => path.isAbsolute(route);
// CONVERTIR RUTA ABSOLUTA
const convertPathRelativeToAbsolute = (route) => path.resolve(route);
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

// EXTRAER LINK DEL  DEL MD

module.exports = {
  evaluatePath,
  convertPathRelativeToAbsolute,
  readDirectoryRecursive,
  evaluateFilesMd,
};
// eslint-disable-next-line max-len
// console.log(readDirectoryRecursive('/home/lizbeth/Documents/LAB-11/LIM011-fe-md-links/src/prueba'));
// console.log(readDirectoryRecursive(path.join(process.cwd(), 'src')));

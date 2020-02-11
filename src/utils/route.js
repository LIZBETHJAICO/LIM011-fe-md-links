const path = require('path');
const fs = require('fs');
// OBTENER SI ES ABSOLUTA
const evaluatePath = (route) => path.isAbsolute(route);
// CONVERTIR RUTA ABSOLUTA
const convertPathRelativeToAbsolute = (route) => path.resolve(route);
// LEE  CONTENIDO DEL DIRECTORIO
const readDirectoryRecursive = (ruta) => {
  let filePathsArray = [];
  // console.log(absoluteFilePath)
  // isDirectory para ver si es un directorio true o false
  if (fs.statSync(ruta).isDirectory()) {
    const getNameDirectoryArray = fs.readdirSync(ruta);
    // un array en string
    getNameDirectoryArray.forEach((elem) => {
      const absoluteFilePath = path.join(ruta, elem);
      filePathsArray = filePathsArray.concat(readDirectoryRecursive(absoluteFilePath));
    });
  } else {
    // console.log(filePathsArray.push(ruta));
    filePathsArray.push(ruta);
  }
  return filePathsArray;
};

// EVALUA LA RUTA SI ES MD.

const evaluateFileIsMd = (route) => {
  const ismd = path.extname(route) === '.md';
  // console.log(path.extname(route), ismd);
  return ismd;
};
// EVALUA EL ARRAY MD
const evaluateFilesMd = (array) => {
  const mdFilePathsArray = array.filter((elem) => path.extname(elem) === '.md');
  return mdFilePathsArray;
};
// EXTRAER LINK DEL  DEL MD


module.exports = {
  evaluatePath,
  convertPathRelativeToAbsolute,
  readDirectoryRecursive,
  evaluateFileIsMd,
  evaluateFilesMd,
};
// eslint-disable-next-line max-len
// console.log(readDirectoryRecursive('/home/lizbeth/Documents/LAB-11/LIM011-fe-md-links/src/prueba'));
// console.log(readDirectoryRecursive(path.join(process.cwd(), 'src')));

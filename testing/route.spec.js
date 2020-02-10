const path = require('path');
// const fs = require('fs');
const route = require('../src/utils/route.js');

const array = ['/home/lizbeth/Documents/LAB-11/LIM011-fe-md-links/src/cli.js',
  '/home/lizbeth/Documents/LAB-11/LIM011-fe-md-links/src/cliCondition.js',
  '/home/lizbeth/Documents/LAB-11/LIM011-fe-md-links/src/md-link.js',
  '/home/lizbeth/Documents/LAB-11/LIM011-fe-md-links/src/prueba/Example/idex.html',
  '/home/lizbeth/Documents/LAB-11/LIM011-fe-md-links/src/prueba/Example/probando.md',
  '/home/lizbeth/Documents/LAB-11/LIM011-fe-md-links/src/prueba/first.md',
  '/home/lizbeth/Documents/LAB-11/LIM011-fe-md-links/src/prueba/prueba.js',
  '/home/lizbeth/Documents/LAB-11/LIM011-fe-md-links/src/prueba/red.md',
  '/home/lizbeth/Documents/LAB-11/LIM011-fe-md-links/src/utils/estractorLink.js',
  '/home/lizbeth/Documents/LAB-11/LIM011-fe-md-links/src/utils/route.js',
  '/home/lizbeth/Documents/LAB-11/LIM011-fe-md-links/src/utils/stats.js',
  '/home/lizbeth/Documents/LAB-11/LIM011-fe-md-links/src/utils/validate.js'];
const arrayOutput = ['/home/lizbeth/Documents/LAB-11/LIM011-fe-md-links/src/prueba/Example/probando.md',
  '/home/lizbeth/Documents/LAB-11/LIM011-fe-md-links/src/prueba/first.md',
  '/home/lizbeth/Documents/LAB-11/LIM011-fe-md-links/src/prueba/red.md'];

describe('evalua la ruta', () => {
  it('deberia ser una funcion', () => {
    expect(typeof route.evaluatePath).toBe('function');
  });
  it('deberia retornar true si es una ruta absoluta', () => expect(route.evaluatePath(process.cwd())).toBe(true));
});
describe('convertir la ruta relativa a ruta absoluta', () => {
  it('Debería ser una función', () => {
    expect(typeof route.convertPathRelativeToAbsolute).toBe('function');
  });
  it('Debería retornar una ruta absoluta a partir de una ruta relativa', () => {
    expect(route.convertPathRelativeToAbsolute('.')).toBe(process.cwd());
  });
});

describe('lee contenido del directorio- recursiva ', () => {
  it('Debería retornar function', () => {
    expect(typeof route.readDirectoryRecursive).toBe('function');
  });
  it('Debería retornar true si la ruta absoluta es un directorio', () => {
    expect(route.readDirectoryRecursive(path.join(process.cwd(), 'src'))).toEqual(array);
  });
});
describe('es una extension .MD?', () => {
  it('Debería retornar function', () => {
    expect(typeof route.evaluateFileIsMd).toBe('function');
  });
  it('Debería retornar false si el file no tiene extensión MD', () => {
    expect(route.evaluateFileIsMd(path.join(process.cwd(), 'src'))).toBe(false);
  });
  it('Debería retornar true si el file tiene extensión MD', () => {
    expect(route.evaluateFileIsMd(path.join(process.cwd(), 'README.md'))).toBe(true);
  });
});

describe('se obtiene todas las extensiones md en un array?', () => {
  it('Debería retornar function', () => {
    expect(typeof route.evaluateFilesMd).toBe('function');
  });
  it('Debería retornar false si el file no tiene extensión MD', () => {
    expect(route.evaluateFilesMd(array)).toEqual(arrayOutput);
  });
});

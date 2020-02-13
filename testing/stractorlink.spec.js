
const path = require('path');
const route = require('../src/utils/estractorLink.js');

const array = ['/home/lizbeth/Documents/LAB-11/LIM011-fe-md-links/src/cli.js',
  '/home/lizbeth/Documents/LAB-11/LIM011-fe-md-links/src/cliCondition.js',
  '/home/lizbeth/Documents/LAB-11/LIM011-fe-md-links/src/md-link.js',
  '/home/lizbeth/Documents/LAB-11/LIM011-fe-md-links/src/probando.js',
  '/home/lizbeth/Documents/LAB-11/LIM011-fe-md-links/src/prueba/Example/idex.html',
  '/home/lizbeth/Documents/LAB-11/LIM011-fe-md-links/src/prueba/Example/probando.md',
  '/home/lizbeth/Documents/LAB-11/LIM011-fe-md-links/src/prueba/first.md',
  '/home/lizbeth/Documents/LAB-11/LIM011-fe-md-links/src/prueba/prueba.js',
  '/home/lizbeth/Documents/LAB-11/LIM011-fe-md-links/src/prueba/red.md',
  '/home/lizbeth/Documents/LAB-11/LIM011-fe-md-links/src/utils/estractorLink.js',
  '/home/lizbeth/Documents/LAB-11/LIM011-fe-md-links/src/utils/stats.js',
  '/home/lizbeth/Documents/LAB-11/LIM011-fe-md-links/src/utils/validate.js'];

const arrayOutput = ['/home/lizbeth/Documents/LAB-11/LIM011-fe-md-links/src/prueba/Example/probando.md',
  '/home/lizbeth/Documents/LAB-11/LIM011-fe-md-links/src/prueba/first.md',
  '/home/lizbeth/Documents/LAB-11/LIM011-fe-md-links/src/prueba/red.md'];

const inputpath = '/home/lizbeth/Documents/LAB-11/LIM011-fe-md-links/src/prueba/red.md';
const OutputestracLink = [{
  href: 'https://es.wikipedia.org/wiki/Marown',
  text: 'Markdown',
  path:
 '/home/lizbeth/Documents/LAB-11/LIM011-fe-md-links/src/prueba/red.md',
},
{
  href: '',
  text: 'Node.js',
  path:
 '/home/lizbeth/Documents/LAB-11/LIM011-fe-md-links/src/prueba/red.md',
},
{
  href: 'https://nodejs.org/es/',
  text: 'Node.js',
  path:
 '/home/lizbeth/Documents/LAB-11/LIM011-fe-md-links/src/prueba/red.md',
},
{
  href: 'https://developers.google.com/v8/',
  text: 'motor de JavaScript V8 de Chrome',
  path:
 '/home/lizbeth/Documents/LAB-11/LIM011-fe-md-links/src/prueba/red.md',
}];
// const path = require('path');
// const fs = require('fs');

describe('FUNCION RECURSIVA DIRECTORIO ', () => {
  it('Debería retornar function', () => {
    expect(typeof route.readDirectoryRecursive).toBe('function');
  });
  it('Debería retornar true si la ruta absoluta es un directorio', () => {
    expect(route.readDirectoryRecursive(path.join(process.cwd(), 'src'))).toEqual(array);
  });
});
describe('FUNCION GETPATHARRAY md en un array?', () => {
  it('Debería retornar function', () => {
    expect(typeof route.evaluateFilesMd).toBe('function');
  });
  it('Debería retornar false si el file no tiene extensión MD', () => {
    expect(route.evaluateFilesMd(array)).toEqual(arrayOutput);
  });
});
describe('FUNCION GETPATHARRAY', () => {
  it('deberia ser una funcion', () => {
    expect(typeof route.getPathArray).toBe('function');
  });
  it('Debería retonarme un array', () => {
    expect(route.getPathArray('../LIM011-fe-md-links/src/prueba')).toEqual(arrayOutput);
  });
});

describe('FUNCION MARKDOWNLINKEXTRACTOR', () => {
  it('deberia ser una funcion', () => {
    expect(typeof route.markdownLinkExtractor).toBe('function');
  });
  it('Debería retonarme un array', () => {
    expect(route.markdownLinkExtractor(inputpath)).toEqual(OutputestracLink);
  });
});

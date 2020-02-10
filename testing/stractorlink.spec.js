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
const route = require('../src/utils/estractorLink.js');

describe('convertir a ruta absoluta y obtener el path en  array', () => {
  it('deberia ser una funcion', () => {
    expect(typeof route.getPathArray).toBe('function');
  });
  it('Debería retonarme un array', () => {
    expect(route.getPathArray('../LIM011-fe-md-links/src/prueba')).toEqual(arrayOutput);
  });
});

describe('convertir path en  array', () => {
  it('deberia ser una funcion', () => {
    expect(typeof route.markdownLinkExtractor).toBe('function');
  });
  it('Debería retonarme un array', () => {
    expect(route.markdownLinkExtractor(inputpath)).toEqual(OutputestracLink);
  });
});

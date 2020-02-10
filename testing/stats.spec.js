// const path = require('path');
// const fs = require('fs');
const route = require('../src/utils/stats.js');

const inputstats = [{
  href: 'https://es.wikipedia.org/wiki/Markdown',
  text: 'Markdown',
  path:
   '/home/lizbeth/Documents/LAB-11/LIM011-fe-md-links/src/prueba/Example/probando.md',
  status: 200,
  textStatus: 'OK',
},
{
  href: 'https://nodejs.org/',
  text: 'Node.js',
  path:
   '/home/lizbeth/Documents/LAB-11/LIM011-fe-md-links/src/prueba/Example/probando.md',
  status: 200,
  textStatus: 'OK',
},
{
  href: 'https://nodejs.org/',
  text: 'Node.js',
  path:
   '/home/lizbeth/Documents/LAB-11/LIM011-fe-md-links/src/prueba/Example/probando.md',
  status: 200,
  textStatus: 'OK',
},
];
describe('Broken links', () => {
  it('Debería retornar function', (done) => {
    expect(typeof route.statsTotal).toBe('function');
    done();
  });
  it('Debería retornar la cantidad de links rotos', (done) => {
    expect(route.statsTotal(inputstats)).toBe(3);
    done();
  });
});

describe('Broken links', () => {
  it('Debería retornar function', (done) => {
    expect(typeof route.statsUnique).toBe('function');
    done();
  });
  it('Debería retornar la cantidad de links unicos', (done) => {
    expect(route.statsUnique(inputstats)).toBe(2);
    done();
  });
  it('Debería retornar la cantidad de links caidos', (done) => {
    expect(route.statsBroken(inputstats)).toBe(0);
    done();
  });
});

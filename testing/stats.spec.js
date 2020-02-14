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
describe('FUNCION STATS TOTAL', () => {
  it('Debería retornar function', (done) => {
    expect(typeof route.statsTotal).toBe('function');
    done();
  });
  it('Debería retornar la cantidad de links ', (done) => {
    expect(route.statsTotal(inputstats)).toBe(3);
    done();
  });
});

describe('FUNCION DE STAT UNICO', () => {
  it('Debería retornar function', (done) => {
    expect(typeof route.statsUnique).toBe('function');
    done();
  });
  it('Debería retornar la cantidad de links unicos', (done) => {
    expect(route.statsUnique(inputstats)).toBe(2);
    done();
  });
});

describe('FUNCION STATS BROKEN', () => {
  it('Deveria retornar una funcion', (done) => {
    expect(typeof route.statsUnique).toBe('function');
    done();
  });
  it('Debería retornar la cantidad de links caidos', (done) => {
    expect(route.statsBroken(inputstats)).toBe(0);
    done();
  });
});

describe('FUNCION PRINT STATS', () => {
  it('Deveria retonar una funcion', (done) => {
    expect(typeof route.printStats).toBe('function');
    done();
  });
  it('Debería retornar la cantidad de links total y unicos en string', (done) => {
    expect(route.printStats(inputstats)).toMatch('');
    done();
  });
});

describe('FUNCION PRINT STAT VALIDATE', () => {
  it('Deveria retonar una funcion', (done) => {
    expect(typeof route.printStats).toBe('function');
    done();
  });
  it('Debería retornar la cantidad de links total y unicos en string', (done) => {
    expect(route.printStatsValidate(inputstats)).toMatch('');
    done();
  });
});

// const path = require('path');
const cli = require('../src/cliCondition.js');

describe('FUNCION CONDICION CLI', () => {
  it('debería retornar la informacion del link', (done) => {
    cli.fsMdlinks((undefined), (undefined, undefined)).then((data) => {
      expect(data).toMatch('ingrese una ruta relativa o absoluta');
      done();
    });
  });
  it('debería retornar la informacion del link', (done) => {
    cli.fsMdlinks(('/home/lizbeth/Documents/LAB-11/LIM011-fe-md-links/src/prueba/red.md'), (undefined, undefined)).then((data) => {
      expect(data).toMatch('ingrese una ruta relativa o absoluta');
      done();
    });
  });
  it('debería retornar la informacion del link', (done) => {
    expect.assertions(1);
    return cli.fsMdlinks(('/home/lizbeth/Documents/LAB-11/LIM011-fe-md-links/src/prueba/red.md'), ('--v')).then((data) => {
      expect(data).toMatch('');
      done();
    });
  });
  it('debería retornar la informacion del link', (done) => {
    cli.fsMdlinks(('/home/lizbeth/Documents/LAB-11/LIM011-fe-md-links/src/prueba/red.md'), ('--s')).then((data) => {
      expect(data).toMatch('');
      done();
    });
  });
  it('debería retornar la informacion del link', (done) => {
    cli.fsMdlinks(('/home/lizbeth/Documents/LAB-11/LIM011-fe-md-links/src/prueba/red.md'), ('--v')).then((data) => {
      expect(data).toMatch('');
      done();
    });
  });
  it('debería retornar la informacion del link', (done) => {
    cli.fsMdlinks(('/home/lizbeth/Documents/LAB-11/LIM011-fe-md-links/src/prueba/red.md'), ('--v', '--s')).then((data) => {
      expect(data).toMatch('');
      done();
    });
  });
});

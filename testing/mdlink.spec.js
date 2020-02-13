const path = require('path');
const mdLin = require('../src/md-link.js');
const fetchMock = require('../__mocks__/node-fetch.js');

fetchMock.config.sendAsJson = false;
jest.mock('node-fetch');
fetchMock
  .mock('https://nodejs.org/api/process.html#process_process_cwd', 200)
  .mock('https://developer.mozlla.org/es/', 404);

const outputOne = [
  {
    href: 'https://nodejs.org/api/process.html#process_process_cwd', path: path.join(process.cwd(), 'src', 'prueba', 'first.md'), status: 200, statusText: 'OK', text: '1',
  },
  {
    href: 'https://developer.mozlla.org/es/', path: path.join(process.cwd(), 'src', 'prueba', 'first.md'), status: 404, statusText: 'fail', text: '2',
  }];

const outputTwo = [
  {
    href: 'https://nodejs.org/api/process.html#process_process_cwd',
    text: '1',
    path: path.join(process.cwd(), 'src', 'prueba', 'first.md'),
  },
  {
    href: 'https://developer.mozlla.org/es/',
    text: '2',
    path: path.join(process.cwd(), 'src', 'prueba', 'first.md'),
  },
];

describe('Md links', () => {
  it('Debería retornar function', () => {
    expect(typeof mdLin.mdLinks).toBe('function');
  });
  it('Debería retornar una promesa en caso de que sea false', (done) => {
    expect.assertions(1);
    return mdLin.mdLinks(path.join(process.cwd(), 'src', 'prueba', 'first.md'), { validate: true }).then((response) => {
      expect(response).toEqual(outputOne);
      done();
    });
  });
  it('Debería retornar una promesa en caso de ser true', (done) => {
    expect.assertions(1);
    return mdLin.mdLinks(path.join(process.cwd(), 'src', 'prueba', 'first.md'), { validate: false }).then((response) => {
      expect(response).toEqual(outputTwo);
      done();
    });
  });
});
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
describe('FUNCION PRINT STAT VALIDATE', () => {
  it('Deveria retonar una funcion', (done) => {
    expect(typeof mdLin.printValidateFalse).toBe('function');
    done();
  });
  it('Debería retornar la cantidad de links total y unicos en string', (done) => {
    expect(mdLin.printValidateFalse(inputstats)).toMatch('');
    done();
  });
});
describe('FUNCION PRINT STAT VALIDATE', () => {
  it('Deveria retonar una funcion', (done) => {
    expect(typeof mdLin.printValidateTrue).toBe('function');
    done();
  });
  it('Debería retornar la cantidad de links total y unicos en string', (done) => {
    expect(mdLin.printValidateTrue(inputstats)).toMatch('');
    done();
  });
});

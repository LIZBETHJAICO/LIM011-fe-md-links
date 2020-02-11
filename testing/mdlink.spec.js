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
  it('Debería retornar una promesa en caso de ser true', () => {
    mdLin.mdLinks(path.join(process.cwd(), 'src', 'prueba', 'first.md'), { validate: false }).then((response) => {
      expect(response).toEqual(outputTwo);
    });
  });
  it('Debería retornar una promesa en caso de que sea false', (done) => {
    mdLin.mdLinks(path.join(process.cwd(), 'src', 'prueba', 'first.md'), { validate: true }).then((response) => {
      expect(response).toEqual(outputOne);
      done();
    });
  });
});

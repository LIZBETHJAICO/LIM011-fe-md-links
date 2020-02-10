const fetchMock = require('fetch-mock');
const path = require('path');
const validate = require('../src/utils/validate.js');

const route = '/home/lizbeth/Documents/LAB-11/LIM011-fe-md-links/src/prueba/first.md';
const output = [
  {
    href: 'https://nodejs.org/api/process.html#process_process_cwd', path: path.join(process.cwd(), 'src', 'prueba', 'first.md'), status: 200, statusText: 'OK', text: '1',
  },
  {
    href: 'https://developer.mozlla.org/es/', path: path.join(process.cwd(), 'src', 'prueba', 'first.md'), status: '', statusText: 'este link no existe', text: '2',
  }];

describe('Validate link', () => {
  fetchMock
    .mock('https://nodejs.org/api/process.html#process_process_cwd', 200)
    .mock('https://developer.mozlla.org/es/', 404);
  it('Debería retornar function', (done) => {
    expect(typeof validate.linksCorect).toBe('function');
    done();
  });
  it('Deberia retornar la promesa con href, path,text,  status, statustext ', (done) => {
    validate.linksCorect(route)
      .then((response) => {
        expect(response).toStrictEqual(output);
        done();
      });
  });
});

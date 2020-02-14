const path = require('path');
const fetchMock = require('../__mocks__/node-fetch');
const validate = require('../src/utils/validate.js');

// const route = '/home/lizbeth/Documents/LAB-11/LIM011-fe-md-links/src/prueba/first.md';
const output = [
  {
    href: 'https://www.laboratoria.la/', path: path.join(process.cwd(), 'src', 'prueba', 'first.md'), status: 200, statusText: 'OK', text: '1',
  },
  {
    href: 'https://developer.mozlla.org/es/', path: path.join(process.cwd(), 'src', 'prueba', 'first.md'), status: '', statusText: 'ESTE LINK NO EXISTE', text: '2',
  },
  {
    href: 'https://slack.com/intl/es-pe/_reset', path: path.join(process.cwd(), 'src', 'prueba', 'first.md'), status: 404, statusText: 'FAIL', text: '3',
  },
];
describe('Validate link', () => {
  fetchMock
    .mock('https://www.laboratoria.la/', 200)
    .mock('https://developer.mozlla.org/es/', () => {
      throw new Error('ERROR_MESSAGE');
    })
    .mock('https://slack.com/intl/es-pe/_reset', 404);
  it('Debería retornar function', (done) => {
    expect(typeof validate.linksCorect).toBe('function');
    done();
  });
  it('Deberia retornar la promesa con href, path,text,  status, statustext ', (done) => {
    expect.assertions(1);
    return validate.linksCorect(path.join(process.cwd(), 'src', 'prueba', 'first.md'))
      .then((response) => {
        expect(response).toEqual(output);
        done();
      });
  });
});

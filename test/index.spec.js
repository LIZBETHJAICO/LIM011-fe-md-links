const route = require('../src/utils/route.js');

describe('evalua la ruta', () => {
  it('deberia ser una funcion', () => {
    expect(typeof route.evaluatePath).toBe('function');
  });
  it('deberia retornar true si es una ruta absoluta', () => expect(route.evaluatePath('/home/lizbeth/Documents/ARCHIVOS-LAB-2020/LIM011-fe-md-links/test/index.spec.js')).toBe(true));
  it('deberia retornar false si no es una ruta absoluta', () => expect(route.evaluatePath('ARCHIVOS-LAB-2020/LIM011-fe-md-links')).toBe(false));
});

describe('convertir la ruta relativa a ruta absoluta', () => {
  it('Debería ser una función', () => {
    expect(typeof route.convertPathRelativeToAbsolute).toBe('function');
  });
  it('Debería retornar una ruta absoluta a partir de una ruta relativa', () => {
    expect(route.convertPathRelativeToAbsolute('../Documents/ARCHIVOS-LAB-2020/LIM011-fe-md-links')).toBe('/home/lizbeth/Documents/ARCHIVOS-LAB-2020/Documents/ARCHIVOS-LAB-2020/LIM011-fe-md-links');
  });
});

describe('la ruta  es un directorio?', () => {
  it('Debería retornar function', () => {
    expect(typeof route.evaluatedirectory).toBe('function');
  });
  it('Debería retornar true si la ruta absoluta es un directorio', () => {
    expect(route.evaluatedirectory('/home/lizbeth/Documents/ARCHIVOS-LAB-2020/LIM011-fe-md-links')).toBe(true);
  });
  // it('Debería retornar false si la ruta absoluta no es un directorio', () => {
  // expect(route.evaluatedirectory('/home/lizbeth/Documents/ARCHIVOS-LAB-2020/LIM011-fe-md-links/package.json').toBe(false));
  // });
});

//  describe('la ruta es un archivo ?', () => {
//    it('Debería retornar function', () => {
//       expect(typeof checkFile).toBe('function');
//     });
//     it('Debería retornar false si la ruta absoluta no es un archivo', () => {
//       expect(checkFile('/lims011/src').toBe(false));
//    });
//    it('Debería retornar true si la ruta absoluta es un archivo', () => {
//         expect(checkFile('/lims011/src/readme.md').toBe(true));
//      });
//    });

//   describe('la extension de la ruta absoluta es .MD?', () => {
//     it('Debería retornar function', () => {
//       expect(typeof checkExtensionMd).toBe('function');
//     });
//     it('Debería retornar false si el archivo no tiene extensión MD', () => {
//       expect(checkExtensionMd('/lims011/src/main.js')).toBe(false);
//    });
//     it('Debería retornar true si el archivo tiene extensión MD', () => {
//       expect(checkExtensionMd('/lims011/src/readme.md')).toBe(true);
//     });
//    });

// describe('Buscar archivos md', () => {
//   it('Debería retornar function', () => {
//     expect(typeof searchFilesMd).toBe('function');
//   });
//   it('Debería retornar el archivo que tiene como extensión MD', () => {
//     expect(searchFilesMd).toBe(true);
//   });
// });

// describe('guardando link', () => {
//   it('Debería retornar function', () => {
//     expect(typeof saveLinks).toBe('function');
//   });
//   it('Debería retornar el link del primer elemento del array de links', () => {
//     expect(saveLinks).toBe('https://www.npmjs.com/package/eslint');
//   });
//   it('Debería retornar el texto del primer elemento del array de links', () => {
//     expect(saveLinks);
//   });
//   it('Debería retornar la ruta del primer elemento del array de links', () => {
//     expect(saveLinks).toBe();
//   });
// });

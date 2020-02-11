
/*
const prueba = [{
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
*/

const statsTotal = (array) => array.length;

// console.log(statsTotal(prueba));

const statsUnique = (array) => [...new Set(array.map((link) => link.href))].length;

// console.log(statsUnique(prueba));

const statsBroken = (array) => array.filter((link) => link.status === '' || link.textStatus === 'Fail').length;
// console.log(statsBroken(prueba));


module.exports = {
  statsTotal,
  statsUnique,
  statsBroken,
};

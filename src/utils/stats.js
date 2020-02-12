/* eslint-disable max-len */

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

const statsTotal = (array) => array.length;

const statsUnique = (array) => [...new Set(array.map((link) => link.href))].length;
const statsBroken = (array) => array.filter((link) => link.status === '' || link.textStatus === 'Fail').length;


const printStats = (array) => {
  const total = (`Total: ${statsTotal(array)} \n Unique: ${statsUnique(array)} \n Broken: ${statsBroken(array)}`);
  return total;
};

const printStatsValidate = (array) => {
  const total = (`Total: ${statsTotal(array)} \n Unique: ${statsUnique(array)} \n `);
  return total;
};
// console.log(printStats(prueba));
// console.log(printStatsValidate(prueba));


// const statsTotal = (array) => array.length;

(statsTotal(prueba));

// const statsUnique = (array) => [...new Set(array.map((link) => link.href))].length;

// console.log(statsUnique(prueba));
// Cuantos link caidos
// const statsBroken = (array) => array.filter((link) => link.status === '' || link.textStatus === 'Fail').length;
// console.log(statsBroken(prueba));


module.exports = {
  printStats,
  printStatsValidate,
};


const statsTotal = (array) => array.length;

const statsUnique = (array) => [...new Set(array.map((link) => link.href))].length;
const statsBroken = (array) => array.filter((link) => link.status === '' || link.textStatus === 'Fail').length;


const printStats = (array) => {
  const total = (`Total: ${statsTotal(array)} \n Unique: ${statsUnique(array)} \n `);
  return total;
};

const printStatsValidate = (array) => {
  const total = (`Total: ${statsTotal(array)} \n Unique: ${statsUnique(array)} \n Broken: ${statsBroken(array)}`);
  return total;
};

// console.log(printStatsValidate(prueba));
// console.log(printStatsValidate(prueba));


// const statsTotal = (array) => array.length;

// (statsTotal(prueba));

// const statsUnique = (array) => [...new Set(array.map((link) => link.href))].length;

// console.log(statsUnique(prueba));
// Cuantos link caidos
// eslint-disable-next-line max-len
// const statsBroken = (array) => array.filter((link) => link.status === '' || link.textStatus === 'Fail').length;
// console.log(statsBroken(prueba));


module.exports = {
  statsTotal,
  statsUnique,
  statsBroken,
  printStats,
  printStatsValidate,
};

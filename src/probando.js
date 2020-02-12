/*
const ciudades = [
  {
    pais: 'Venezuela',
    nombre: 'Maracaibo',
    habitantes: 1209000,
  },
  {
    pais: 'Turquía',
    nombre: 'Denizli',
    habitantes: 850300,
  },
  {
    pais: 'Italia',
    nombre: 'Siena',
    habitantes: 53700,
  },
  {
    pais: 'Italia',
    nombre: 'Genova',
    habitantes: 583600,
  },
  {
    pais: 'Brasil',
    nombre: 'Fortaleza',
    habitantes: 2400100,
  },
];
*/
/*
const obtenerHabitantes = (array) => {
  const ha = array.reduce((acumulador, { pais }) => acumulador + pais, '0');
  return ha;
};
console.log(obtenerHabitantes(ciudades));
*/

// Resultado de habitantesTotales: 5096700
const suma = ['q', 'f', 'f'].reduce(((a, b) => `${a} ${b}`));
console.log(suma);

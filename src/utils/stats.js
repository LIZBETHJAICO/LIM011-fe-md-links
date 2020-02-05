
const prueba = [{ href: 'https://es.wikipedia.org/wiki/Markdown',
text: 'Markdown',
path:
 '/home/lizbeth/Documents/LAB-11/LIM011-fe-md-links/src/prueba/Example/probando.md',
status: 200,
textStatus: 'OK' },
{ href: 'https://nodejs.org/',
text: 'Node.js',
path:
 '/home/lizbeth/Documents/LAB-11/LIM011-fe-md-links/src/prueba/Example/probando.md',
status: 200,
textStatus: 'OK' },
{ href: 'https://nodejs.org/',
text: 'Node.js',
path:
 '/home/lizbeth/Documents/LAB-11/LIM011-fe-md-links/src/prueba/Example/probando.md',
status: 200,
textStatus: 'OK' },
 ]

const statsOutput = (array) =>{
//console.log(array);
const total =array.length;
const unique = [... new Set(array.map((link) => link.href))].length;
const broken = (array.filter((link) => link.status === '' || link.textStatus === 'Fail')).length;
 console.log(unique);

const obj = {
     Total: total,
    Unique: unique,
    Broken: broken,
}
return obj;

}
console.log(statsOutput(prueba));
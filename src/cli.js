#!/usr/bin/env node
const mds = require('../src/cliCondition.js');

const path = process.argv[2];
// console.log();

const options = {
  validate: process.argv[3],
  stats: process.argv[4],
};

mds.fsMdlinks(path, options).then((res) => console.log(res));

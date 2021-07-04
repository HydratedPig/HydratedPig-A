'use strict';

exports.b = false;

const a = require('./a.js');

exports.b = true;

console.log('b => a', a);

console.log('end b');
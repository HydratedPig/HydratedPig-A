'use strict';

exports.a = false;

exports.d = 'd';

const b = require('./b.js');

exports.c = 'c';

console.log('a => b', b);

console.log('end a');
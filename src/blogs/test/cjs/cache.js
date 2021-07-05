const react = require('react')
const cache = require.cache
const resolve = require.resolve('react');
console.log(cache, '\n\n\n');
console.log(resolve);
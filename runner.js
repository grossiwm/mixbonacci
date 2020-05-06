const sequences = require('./sequences');
const test = require('./test');

const fibo = sequences.fibonacci

console.log(`For Fibonacci: ${test.doAsserts(fibo, test.fiboCases)}`);







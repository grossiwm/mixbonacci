const sequences = require('./sequences');
const test = require('./test');

const fibo = sequences.fibonacci;

const pado = sequences.padovan;

console.log(`For Fibonacci: ${test.doAsserts(fibo, test.fiboCases)}`);

console.log(`For Padovan: ${test.doAsserts(pado, test.padoCases)}`);








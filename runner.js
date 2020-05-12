l = console.log

const sequences = require('./sequences');
const test = require('./test');

const fibo = sequences.fibonacci;

const pado = sequences.padovan;

const jacob = sequences.jacobsthal;

l(`For Fibonacci: ${test.doAsserts(fibo, test.fiboCases)}`);

l(`For Padovan: ${test.doAsserts(pado, test.padoCases)}`);

l(`For Jacobsthal: ${test.doAsserts(jacob, test.jacobCases)}`);

// l(jacob(6))








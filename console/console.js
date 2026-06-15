console.clear()
const x = 1;
const y = 2;
const z = 3;
console.count(
  'The value of x is ' + x + ' and has been checked .. how many times?'
);

console.count(
  'The value of x is ' + x + ' and has been checked .. how many times?'
);
console.count(
  'The value of y is ' + y + ' and has been checked .. how many times?'
);

const oranges = ['orange', 'orange']

oranges.forEach(fruit => {
    console.count(fruit);
});

console.countReset('orange');

oranges.forEach(fruit => {
    console.count(fruit);
});

//stack trace 

const function2 = () => console.trace();
const function1 = () => function2();

function1();

//console to calculate runtime of functions
const doSomething = () => console.log('doing soemthing here');
const measuredoingSomething = () => {
    console.time('doSomething()');
    doSomething();
    console.timeEnd('doSomething()');

};

measuredoingSomething();

//console text styles
import { styleText } from 'node:util';

console.log(
    styleText('red', 'this is red text') +
    styleText(['green', 'bold'], 'this is green bold text')
    + 'this is normal text'

);
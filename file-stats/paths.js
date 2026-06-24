import path from 'node:path';

const notes = 'C:\Users\chestor\Documents\GitHub\new-nodejs-learnings\read-line\readline.js';

console.log(path.dirname(notes));
console.log(path.basename(notes));
console.log(path.extname(notes));

const name = 'joe';
console.log(path.join('/', name, 'olahuubar'));
console.log(path.resolve('readline.js'));
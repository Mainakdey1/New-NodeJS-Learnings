const repl = require('node:repl');


repl.start();
const local = repl.start('$ ');

local.on('exit', () => {
    console.log('Exiting');
    process.exit();
});
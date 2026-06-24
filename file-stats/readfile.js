import fs from 'node:fs';

fs.readFile('C:\\Users\\chestor\\Documents\\GitHub\\new-nodejs-learnings\\read-line\\readline.js', 'utf-8', (err, data) => {
    if (err) {
        console.error(err);
        return;
    }
    console.log(data);
});
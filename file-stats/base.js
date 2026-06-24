import fs from 'node:fs';

fs.stat(`C:\\Users\\chestor\\Documents\\GitHub\\new-nodejs-learnings\\read-line\\readline.js`, (err, data) => {
    if (err) {
        console.error(err);
    }
    console.log(data);
});
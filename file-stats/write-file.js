import fs from 'node:fs';

const content = 'Some aah content';
const path = 'C:\\Users\\chestor\\Documents\\GitHub\\new-nodejs-learnings\\file-stats\\text.txt'

fs.writeFile(path, content, {flag: 'a+'}, err => {});

fs.appendFile(path, content, err => {
    if (err) {
        console.error(err);
    }
});

//file descriptors

try {
    const fd = fs.openSync(path, 'r');
    console.log(fd);

} catch (err) {
    console.error(err);
}

//promises wala fs
import fk from 'node:fs/promises';

let filehandle;
try {
    filehandle = await fk.open(path, 'r+');
    console.log(filehandle.fd);
    console.log(await filehandle.readFile({ encoding: `utf-8`}));

} finally {
    if (filehandle) {
        await filehandle.close();
    }
};
import fs from 'node:fs';
import path from 'node:path';

const folderName = 'C:\\Users\\chestor\\Documents';

try {
    if (!fs.existsSync(folderName)) {
        fs.mkdirSync(folderName);
        console.log('New folder created');
    } 
} catch (err) {
    console.log(err);
};

//reading contents from a directory
const isFile = (fileName) => {
    return fs.lstatSync(fileName).isFile();
};


console.log(fs.readdirSync(folderName));

const res = fs.readdirSync(folderName)
.map(fileName => {
    return path.join(folderName, fileName);
})
.filter(isFile);

console.log(res);


//renaming and deleting folders
const folderPath = 'C:\\Users\\chestor\\Documents\\GitHub\\new-nodejs-learnings\\file-stats\\sample_folder';
const newFolderPath = 'C:\\Users\\chestor\\Documents\\GitHub\\new-nodejs-learnings\\file-stats\\renamed'
fs.renameSync(folderPath, newFolderPath, err => {
    if (err) {
        console.error(err);
    }
});
//worked as expected

fs.rmdirSync(newFolderPath);
//used async for this so that shit gets followed up
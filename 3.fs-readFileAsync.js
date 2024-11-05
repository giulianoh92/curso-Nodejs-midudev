import fs from 'node:fs';

console.log('Leyendo el primer archivo...');

//fs.readFile( filepath, format, callback )
fs.readFile('./file.txt', 'utf-8', (error, text) => {
    console.log(text);
});

console.log('Leyendo el segundo archivo...');
fs.readFile('./file2.txt', 'utf-8', (error, text) => {
    console.log(text);
});
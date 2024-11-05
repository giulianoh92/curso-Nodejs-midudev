import fs from 'node:fs';

console.log('Leyendo el primer archivo...');
fs.readFile('./file.txt', 'utf-8', (error, text) => {
    if (error) {
        console.error('Error: ', error);
    } else {
        console.log(text);
    }
}); 

console.log('Cosas...');

console.log('Leyendo el segundo archivo...');
fs.readFile('./file2.txt', 'utf-8', (error, text) => {
    if (error) {
        console.error('Error: ', error);
    } else {
        console.log(text);
    }
});
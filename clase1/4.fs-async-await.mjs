import {readFile} from 'node:fs/promises';

console.log('Leyendo el primer archivo...');
const text = await readFile('./file.txt', 'utf-8');
console.log(text);

console.log('Hace algo más...');

console.log('Leyendo el segundo archivo...');
const text2 = await readFile('./file2.txt', 'utf-8');
console.log(text2);

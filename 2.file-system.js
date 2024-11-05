const fs = require('node:fs');

const stats = fs.statSync('./file.txt');

console.log(
    'Tamaño del archivo: ' + stats.size + ' bytes.',
    'Fecha de creación: ' + stats.birthtime,
    'Fecha de modificación: ' + stats.mtime,
    'Es un archivo: ' + stats.isFile(),
    'Es un directorio: ' + stats.isDirectory(),
    'Es un enlace simbólico: ' + stats.isSymbolicLink(),
    'Permisos de lectura: ' + stats.mode,
    'Grupo de usuario: ' + stats.gid,
    'Usuario: ' + stats.uid
);
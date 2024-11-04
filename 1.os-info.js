const os = require('node:os');

console.log('Información del sistema operativo: ');
console.log('Memoria total: ' + (os.totalmem() / 1024 / 1024) + ' Megabytes.');
console.log('Memoria libre: ' + (os.freemem() / 1024 / 1024) + ' Megabytes.');
console.log('Sistema operativo: ' + os.type());
console.log('Plataforma: ' + os.platform());
console.log('Arquitectura: ' + os.arch());
console.log('CPUs: ' + os.cpus().length);
console.log('Versión: ' + os.release());
console.log('Usuario: ' + os.userInfo().username);
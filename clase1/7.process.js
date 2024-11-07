//argumentos de entrada
console.log(process.argv);

console.log(process.pid); //id del proceso
console.log(process.cwd()); //directorio actual

//controlar el proceso y su salida
process.on('exit', (code) => {
    console.log(`About to exit with code: ${code}`);
});

process.exit(0); //0 para exito, 1 para error


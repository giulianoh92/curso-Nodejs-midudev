const express = require('express'); //importar express
const app = express(); //crear una instancia de express

const PORT = process.env.PORT ?? 3000; //definir el puerto

app.get('/', (req, res) => { //definir una ruta
    res.status(200).send('Hola Mundo'); //enviar una respuesta
});

app.listen(PORT, () => { //iniciar el servidor
    console.log(`Servidor corriendo en el puerto http://localhost:${PORT}`);
});
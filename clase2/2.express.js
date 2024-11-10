const express = require('express'); //importar express

const PORT = process.env.PORT ?? 3000; //definir el puerto

const app = express(); //crear una instancia de express
app.disable('x-powered-by'); //desactivar la cabecera X-Powered-By


app.get('/', (req, res) => { //definir una ruta
    res.status(200).send('Hola Mundo'); //enviar una respuesta
});

app.post('/api/user', (req, res) => { //definir una ruta
    let body = '';
    req.on('data', (chunk) => { //escuchar los datos que se envían
        body += chunk.toString(); //concatenar los datos
    });

    req.on('end', () => { //escuchar el evento end
        const data = JSON.parse(body); //convertir los datos a JSON
        res.status(201).json(data); //enviar una respuesta
    });
});

app.use((req, res) => { //definir un middleware
    res.status(404).send('Página no encontrada'); //enviar una respuesta
});

app.listen(PORT, () => { //iniciar el servidor
    console.log(`Servidor corriendo en el puerto http://localhost:${PORT}`);
});
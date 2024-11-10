const express = require('express'); //importar express

const PORT = process.env.PORT ?? 3000; //definir el puerto

const app = express(); //crear una instancia de express
app.disable('x-powered-by'); //desactivar la cabecera X-Powered-By

app.use(express.json()); //definir un middleware

/*
app.use('/api/*', (req, res, next) => { //definir un middleware
    if(req.method != 'POST') return next(); //si el método no es POST, continuar
    if(req.headers['content-type'] != 'application/json') return next(); //si el content-type no es application/json, continuar

    //solo llegan request POST con content-type application/json

    let body = '';
    req.on('data', (chunk) => { //escuchar los datos que se envían
        body += chunk.toString(); //concatenar los datos
    });

    req.on('end', () => { //escuchar el evento end
        const data = JSON.parse(body); //convertir los datos a JSON
        data.timestamp = Date.now(); //agregar una propiedad timestamp
        req.body = data; //asignar los datos al body de la request
        next(); //continuar
    });
});
*/

app.get('/', (req, res) => { //definir una ruta
    res.status(200).send('Hola Mundo'); //enviar una respuesta
});

app.post('/api/data', (req, res) => { //definir una ruta
    res.status(201).json(req.body); //enviar una respuesta
});

app.use((req, res) => { //definir un middleware
    res.status(404).send('Página no encontrada'); //enviar una respuesta
    //por que el ultimo middleware no tiene next()?
    //porque no hay más middleware después de este
});

app.listen(PORT, () => { //iniciar el servidor
    console.log(`Servidor corriendo en el puerto http://localhost:${PORT}`);
});
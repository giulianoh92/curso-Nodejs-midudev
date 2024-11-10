const express = require('express');

const app = express();
app.disable('x-powered-by'); // Deshabilita la cabecera X-Powered-By
const port = process.env.PORT ?? 3000;

app.use(express.json());

app.get('/', (req, res) => {
    res.json({ message: 'Hello World' });
});

app.listen(port, () => {
    console.log(`Server running on port ${port}`);
});
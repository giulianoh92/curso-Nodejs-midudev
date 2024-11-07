const http = require('http');
const { getFreePort } = require('./10.free-port');

const server = http.createServer((req, res) => {
    console.log('Request received');
    res.end('Hello World\n');
});


getFreePort(3000).then((port) => {
    server.listen(port, () => {
        console.log(`Server listening on port ${port}`);
    });
});


const http = require('node:http');

const desiredPort = 3000;

const processRequest = (req, res) => {
    const { method, url } = req;

    switch (method) {
        case 'GET':
            switch (url) {
                case '/':
                    res.end('Hello World');
                    break;
                case '/about':
                    res.end('About Us');
                    break;
                default:
                    res.statusCode = 404;
                    res.end('Not Found');
            }
            break;

        case 'POST':
            switch (url) {
                case '/user':
                    let body = '';
                    req.on('data', (chunk) => {
                        body += chunk.toString();
                    });
                    req.on('end', () => {
                        console.log(`Received body: ${body}`);
                        try {
                            const parsedBody = JSON.parse(body);
                            const { name, age } = parsedBody;
                            console.log(`Name: ${name}, Age: ${age}`);
                            res.end(`User created: ${body}`);
                        } catch (error) {
                            console.error('Error parsing JSON:', error);
                            res.statusCode = 400;
                            res.end('Invalid JSON');
                        }
                    });
                    break;
                default:
                    res.statusCode = 404;
                    res.end('Not Found');
            }
            break;

        default:
            res.statusCode = 400;
            res.end('Unsupported request');
    }
};

const server = http.createServer(processRequest);

server.listen(desiredPort, () => {
    console.log(`Server listening on port ${desiredPort}`);
});
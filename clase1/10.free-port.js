const net = require('node:net'); //TPC server

function getFreePort(desiredPort) {
    return new Promise((resolve, reject) => {
        const server = net.createServer();
        server.unref();
        server.on('error', reject);
        server.listen({ port: desiredPort }, () => {
            const { port } = server.address();
            server.close(() => resolve(port));
        });
    });
}


module.exports = {getFreePort}; 
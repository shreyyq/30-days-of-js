import { createServer } from 'http';
import staticHandler from 'serve-handler';
import ws, { WebSocketServer } from 'ws';

const server = createServer((req, res) => {
    return staticHandler(req, res, { public: 'public' });
});

const wss = new WebSocketServer({ server });

wss.on('connection', (client) => {
    console.log('Client Connected!');
    client.on('message', (msg) => {
        console.log(`Message: ${msg}`);
        broadcast(msg);
    });
});

function broadcast(msg) {
    for (const client of wss.clients) {
        if (client.readyState === ws.OPEN) {
            client.send(msg);
        }
    }
}

const PORT = 8080;
server.listen(PORT, () => {
    console.log(`Server listening on port ${PORT}...`);
});

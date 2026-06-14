const { WebSocketServer } = require('ws');

const wss = new WebSocketServer({ port: 8080});

console.log('Server listening on ws://localhost:8080');

wss.on('connection', (ws) => {
console.log('Client connected');
ws.on('message', (message) => {
    console.log('Recieved:', message.toString());
    ws.send(message.toString());
});
}
);


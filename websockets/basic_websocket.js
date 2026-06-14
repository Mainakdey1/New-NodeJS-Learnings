//Learning websockets on this shi


const socket = new WebSocket('ws://localhost:8080');
socket.addEventListener('open', event => {
    console.log('Websocket connection established');
    socket.send('Hello server!');
});

socket.addEventListener('message', event => {
    console.log('Message from server', event.data);
});

socket.addEventListener('close', event => {
    console.log('Websocket has been closed', event.code, event.reason

    );
});

socket.addEventListener('error', error => {
    console.log('An error has happened omggg', error);
}
);
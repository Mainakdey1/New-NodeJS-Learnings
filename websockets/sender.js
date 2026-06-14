const socket = new WebSocket('ws://localhost:8080');

socket.addEventListener('open', () => {
  const data = { type: 'message', content: 'Hello from Node.js!' };
  socket.send(JSON.stringify(data));
});
socket.addEventListener('message', event => {
    try {
        const recievedData = JSON.parse(event.data);
        console.log('Recieved JSON:', recievedData);

    } catch (error) {
        console.error('Error parsing data', error);
        console.log('Recieved data was: ', event.data);
    }
});
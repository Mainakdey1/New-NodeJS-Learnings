import  http  from 'node:http';



const server = http.createServer((request, response) => {
    const { headers, method, url } = request;
    let body = [];
    request.on('error', err => {
        console.error(err.stack);
    });
    request.on('data', chunk => {
        body.push(chunk);
    });
    request.on('end', () => {
        body = Buffer.concat(body).toString();
        console.log(body);

        response.end('Recieved');
    });
    response.statusCode = 200;
    response.setHeader('Content-Type', 'application/json');
    response.setHeader('X-Powered-By', 'bacon');
    response.writeHead(200, 'Works it seems', {
        'Content-Type': 'application/json',
        'X pwered by': 'bacon',
    });
    //body of the response
    response.write('<html>');
    response.write('<body>');
    response.write('<h1>Hello, World!</h1>');
    response.write('</body>');
    response.write('</html>');
    response.end();
    
}).listen(8080);
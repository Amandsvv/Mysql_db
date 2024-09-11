const http = require('node:http');

const server = http.createServer((req,res) => {
    // res.end("Aman's Server");

    if(req.url === '/'){
        res.write('Hello World');
        res.end();
    }

    if(req.url === '/api/courses'){
        res.write(JSON.stringify([1,2,3,4,5]));
        res.end();
    }
});

server.listen(3000,()=>{
    console.log("Server is running on port 3000");
});


const http = require("node:http");
const fs = require('fs');
const qs = require('querystring');

function handleRequest(req,res){
    if(req.method === 'GET' && req.url === '/'){
      fs.readFile('./index.html',(err, data) =>{
        if(err){
            res.writeHead(500,{'Content-Type' : 'text/plain'});
            res.end('Error loading page');
        }
        else{
            res.writeHead(200,{'Content-Type' : 'text/html'});
            res.end(data);
        }
      });
    }
    else if(req.method === 'POST' && req.url === '/submit'){
        let body = '';
        req.on('data', chunk =>{
            body += chunk.toString();
        });

        req.on('end',() =>{
            const formData = qs.parse(body);
            const username = formData.username;
            const password = formData.password;

            res.writeHead(200,{'Content-Type' : 'text/html'});
            res.end(`
                <h1>Form Submitted</h1>
                <p>Username : ${username}</p>
                <p>Password : ${password}</p>`);
        })
    }
    else{
        res.writeHead(404,{'Content-Type' : 'text/plain'});
        res.end('404 not found');
    }
}

const server = http.createServer(handleRequest);

server.listen(3000,()=>{
    console.log('Server is running on Port : 3000');
});
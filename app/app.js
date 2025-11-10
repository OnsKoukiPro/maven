const http = require('http');
const PORT = process.env.PORT || 3000;
const message = process.env.MESSAGE || 'Hello from mon-app';
http.createServer((req,res)=>{
  res.writeHead(200,{'Content-Type':'text/plain'});
  res.end(message + '\n');
}).listen(PORT, ()=> console.log(`Listening ${PORT}`));

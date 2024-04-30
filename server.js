//HTTP MODULES
//SERVER AND CLIENT SIDE COMMUMICATION

//IMPORT HTTP MODULE
const http = require('http') //inbuilt module

//declaring and defining our port
const port = 3000
const hostname= '127.0.0.1'

//creating a server
http.createServer(function(req,res){
    //res.statusCode = 200;
   // res.setHeader('content-Type','text/html');
   //combination of the status code and setheader
   res.writeHead(200,{'Content-Type': 'text/html'} );
    res.write('WELCOME TO OUR BACKEND SERVER');
    res.end();

}).listen(port)

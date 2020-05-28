var express = require('express')
var port = 3000
var app = express()

app.use(express.static('assets'));

app.get('/', function(req, res) {
    res.writeHead(200, {"Content-Type": "text/html"});

    if( err ) res.write('Este arquivo nao foi encontrado!');
    
        res.write( html );
        res.end();
   
   });
   
app.listen(port, function() {
  console.log(`Servidor está escutando na porta :${port}`)
})



/*

  var http = require('http'),
    arquivo = require('fs');

var servidor = http.createServer( function( request, response ) {
	arquivo.readFile('paginas/index.html', function( err, html ) {
	response.writeHead(200, {"Content-Type": "text/html"});
	
     if( err ) response.write('Este arquivo nao foi encontrado!');
     
         response.write( html );
         response.end();

	});
    
 });

    servidor.listen(3000, function() {
        console.log('Servidor está nor ar!');
    });
    */
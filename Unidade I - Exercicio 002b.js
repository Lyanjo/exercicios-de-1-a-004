var http = require("http");
var info = require('./meusdados');
http.createServer(function (req, res) {
 res.writeHead(200, { 'Content-Type': 'text/html' });
 res.write("___Nome do Aluno: "+ info.FirstName + " ___ Sobrenome: " + info.LastName + " ___ RGM: " + info.RGM);
 res.end();
}).listen(8080, ()=> {
 console.log('Se dar certo, aparece');
});
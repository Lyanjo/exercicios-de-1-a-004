var http = require('http'); //bibliotecas/modules
var fs = require('fs');
http.createServer(function (req, res) {
 fs.readFile('george-rgm-33680647.html', function(err, data) {
 res.writeHead(200, {'Content-Type': 'text/html'});
 res.write(data);
 return res.end();
 });
}).listen(8081);
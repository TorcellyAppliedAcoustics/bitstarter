var express = require('express');
var fs = require('fs');

var buffer = new Buffer(64);
buffer = fs.readFileSync('./index.html');

var app = express.createServer(express.logger());
  app.get('/', function(request, response) {
  response.send(buffer.toString('utf-8'));

});

var port = process.env.PORT || 5000;
app.listen(port, function() {
  console.log("Listening on " + port);
//  console.log("buffer.length: " + buffer.length);
//  console.log(buffer.toString('utf-8'));
});

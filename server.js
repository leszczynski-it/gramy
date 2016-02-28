var express = require('express');
var app = express();
var config = require('config');

app.use('/public', express.static(__dirname + '/public'));

var port = config.get('server.port');
app.listen(port, function () {
  console.log('Example app listening on port ' + port + '!');
});
var express = require('express');
var app = express();
var server = require('http').createServer(app);
var config = require('config');
var io = require('socket.io')(server);

app.use('/public', express.static(__dirname + '/public'));

var port = config.get('server.port');
server.listen(port, function () {
  console.log('Example app listening on port ' + port + '!');
});

app.get('/update/song', function(req, res) {
   io.emit('data_update', {data: 'abc'});
   res.status(200).end(); 
});

io.on('connection', function(socket){
  console.log('a user connected');
});
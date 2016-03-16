var express = require('express');
var app = express();
var server = require('http').createServer(app);
var config = require('config');
var io = require('socket.io')(server);
var Rx = require('rx');

var subject = new Rx.ReplaySubject(1);

app.use('/public', express.static(__dirname + '/public'));

var port = config.get('server.port');

server.listen(port, function () {
  console.log('Server listening on port ' + port + '!');
});

app.get('/update/song', function(req, res) {
   var data = {data: 'abc'};
   subject.onNext(data);
   res.status(200).end(); 
});

io.on('connection', function(socket){
  console.log('a user connected');
  
  subject.subscribe(function (data) {
    socket.emit('data_update', data);
  });
});
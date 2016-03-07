var socket = io();

socket.on('data_update', function (msg) {
   console.log(msg); 
});

// Require Native Node.js Libraries
var express = require('express');
var app = express();
var http = require('http'); //var http = require('http').Server(app) is the same thing as this line and the next;
http=http.Server(app);
var io = require('socket.io')(http);

// Route our Assets
app.use('/assets/', express.static(__dirname + '/public/assets/'));

// Route our Home Page
app.get('/', function(req, res){
  res.sendFile(__dirname + '/public/index.html');
});

// Handle Socket Connection
io.on('connection', function(socket){
  console.log('A User Connected');

  socket.on('message',function(text){  //emit an update event that passes the text
  	io.emit('update',text + '<br>'); //server recieves message, and then sends it back out in a event called update
  });

});

// Start Server
http.listen(process.env.PORT || 3000, process.env.IP || "0.0.0.0", function(){
  var addr = http.address();
  console.log("Server started at", addr.address + ":" + addr.port);
});






//commands learned:
//sudo npm install -g gulp
//gulp   //this basically runs gulp, meaning it will compile jade files, less files, etc. (might have to use sudo)
//node server.js
//gulp watch // gulp watches to see if changes where made in any files
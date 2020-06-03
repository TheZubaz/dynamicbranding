var express = require('express');
var app = express();
var http = require('http').createServer(app);
var io = require('socket.io')(http);

app.use(express.static('public'))

app.get('/index', function(req, res){
    res.sendFile('index.html', { root: "public" });;
});

app.get('/brandpage', function(req, res){
    res.sendFile('brandpage.html', { root: "public" });
});


io.on('connection', function(socket){

    socket.on('changeBrand', function(naam, kleur, tekst){
        io.sockets.emit('selectedBrand', naam, kleur, tekst);

    })

});

//webserver draait op port 8080
http.listen(process.env.PORT || 8080, function(){
	console.log('listening on *:8080');
  });
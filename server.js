var express = require('express');
var o=require('os');
var proces=require('process');
var app = express();
app.get('/', function (req, res) {
	console.log(req.ip+"\n");
	res.send('{"ipaddress":"'+req.ip+'","language":"'+req.acceptsLanguages()[0]+'","software":"'+o.type()+" "+o.arch()+'"}');
});
var server = app.listen(8081, function () {
	var host = 'localhost';
	var port = server.address().port;
	console.log("Listening at http://%s:%s", host, port);
});

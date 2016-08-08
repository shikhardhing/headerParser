var express = require('express');
var o=require('os');
var proces=require('process');
var app = express();
app.set('port', (process.env.PORT || 5000));
app.get('/', function (req, res) {
	console.log(req.ip+"\n");
	res.send('{"ipaddress":"'+req.ip+'","language":"'+req.acceptsLanguages()[0]+'","software":"'+o.type()+" "+o.arch()+'"}');
});
app.get('/*',function(req,res){
	req.send("Hello");
})
var server = app.listen(app.get('port'), function () {
	var host = 'localhost';
	var port = server.address().port;
	console.log("Listening at http://%s:%s", host, port);
  console.log('Node app is running on port', app.get('port'));
});

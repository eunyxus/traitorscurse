var express = require('express');
var path = require('path');
//instantiate express
var app = express();
//set port
app.set('port', (process.env.PORT || 5000));
//use static files
app.use('/css', express.static(__dirname + '/assets/css'));
app.use('/js', express.static(__dirname + '/assets/js'));
app.use('/fonts', express.static(__dirname + '/assets/fonts'));
app.use('/images', express.static(__dirname + '/images'));
app.use('/public', express.static(__dirname + '/'));
//express routes
app.get('/', function(req, res){
  res.sendFile(path.join(__dirname, 'index.html'));
});
app.get('/elements', function(req, res){
  res.sendFile(path.join(__dirname, 'elements.html'));
});
app.get('/generic', function(req, res){
  res.sendFile(path.join(__dirname, 'generic.html'));
});
//express server listen
var server = app.listen(app.get('port'), function(){
  console.log('Server listening on port ',app.get('port'));
});
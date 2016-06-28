var express = require('express');
var bodyParser = require('body-parser');
var app = express(); // Builds the app
app.use(bodyParser.urlencoded({ extended: true })); // For parsing application/x-www-form-urlencoded
app.use(bodyParser.json()); // For parsing application/json
// var http = require('http');

var messages = [];

app.get('/classes/messages', (req, res) => {
  res.send(JSON.stringify({
    results: messages
  }));
});

app.post('/classes/messages', (req, res) => {
  // req.on('data', function(chunk) {
  //    messages.push(JSON.parse(chunk.toString()));
  // }); 
  messages.push(req.body);

  res.send(201);
});

app.listen(3000, function() {
  console.log('Started on port 3000.');
});
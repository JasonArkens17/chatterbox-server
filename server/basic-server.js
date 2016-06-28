var express = require('express');
// var bodyParser = require('body-parser');
var app = express(); // Builds the app
// app.use(bodyParser.urlencoded({ extended: true })); // For parsing application/x-www-form-urlencoded
// app.use(bodyParser.json()); // For parsing application/json
// var http = require('http');

var messages = [];

app.get('/classes/messages', (req, res) => {
  res.send(JSON.stringify({
    results: messages
  }));
});

app.post('/classes/messages', (req, res) => {
  console.log(req);
  messages.push(JSON.stringify(req.body));
  res.send('');
});

app.listen(3000, function() {
  console.log('Started on port 3000.');
});
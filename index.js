var express = require('express');
var app = express();

app.use(express.static(__dirname + '/public'));

app.get('/', function(req,res) {
  res.sendfile('public/html/checkout.html');
});

app.listen(8000, function () {
  console.log('Server running');
});

//TODO: Why doesn't button update with new $/month after completing forms?
//TODO: Can't click button after closing process halfway through

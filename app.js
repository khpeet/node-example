var express = require('express');
var app = express();

app.get('/',function(req,res) {
  res.send("Hello World");
  res.send("HELLO ITS ME AGAIN");
});

app.listen(4000);

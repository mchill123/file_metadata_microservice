var express = require('express');
var app = express();
var port = process.env.PORT || 3000;
var api = require('./api');

app.listen(port, function(){
    console.log("node connected on port" + port);
    api(app);
})

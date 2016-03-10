var express = require('express');

var app = new express();

app.get('/', function(req, res){
	res.render("./../app/index.ejs", {});
})
// .use(express.static('C:/Users/Adam/Documents/GitHub/ReactExpressApp/.tmp'))
.use(express.static(__dirname + '/../.tmp'))
.listen(3000);
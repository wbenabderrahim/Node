var http = require('http');
var express = require('express');
 var user=require('./BD');

var body = require('body-parser');
var router = require('./router');
var app= express();

app.set('view engine','ejs');
app.set('views',__dirname+'/views');
app.use('/', router)

app.listen(1400,function(){
    console.log('running on port 1400');
});
module.exports = app ;
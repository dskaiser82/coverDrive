var express = require('express');
var app = express();
var mongoose = require('mongoose');
var logger = require('morgan');
var path = require('path');
var bodyParser = require('body-parser');

//we'll need to switch this to mLab
mongoose.connect('mongodb://localhost/cover-drive', function(err){
	if(err) throw err
	console.log('Connected to MongoDB (Aww Yeeahh!!!)! ')
})

















////==================Server Spinning==========================================
app.listen(3000, function(){
	console.log('Server running on 3000. Boom!')
})

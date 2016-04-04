var express = require('express');
var app = express();
var mongoose = require('mongoose');
var logger = require('morgan');
var path = require('path');
var bodyParser = require('body-parser');
var User = require('./models/User');
// var apiRoutes = require('apiRoutes');

//we'll need to switch this to mLab....
mongoose.connect('mongodb://localhost/cover-drive', function(err){
	if(err) throw err
	console.log('Connected to MongoDB (Aww Yeeahh!!!)! ')
})

app.use(bodyParser.urlencoded({extended:false}))
app.use(bodyParser.json())
app.use(express.static(path.join(__dirname, 'public')))


app.get('/', function(req,res){
	res.sendFile(path.join(__dirname, 'public/index.html'))
})









// app.use('/api', apiRoutes)


////==================Server Spinning==========================================
app.listen(3000, function(){
  console.log('Server is spinning on 3000')
})

var express = require('express');
var app = express();
var mongoose = require('mongoose');
var logger = require('morgan');
var path = require('path');
var bodyParser = require('body-parser');
var dotenv = require('dotenv').load({silent: true});
var User = require('./models/user.js');
var apiRoutes = require('./routes/api.js')

var port =  process.env.PORT || 3000

var DB_URL = process.env.MLAB_LINK || 'mongodb://localhost/cover-drive'

//we'll need to switch this to mLab....
mongoose.connect(DB_URL, function(err){
	if(err) throw err
	console.log("Mongo database connected to", DB_URL)
})

app.use(logger('dev'))
app.use(bodyParser.urlencoded({extended:false}))
app.use(bodyParser.json())
app.use(express.static(path.join(__dirname, 'public')))


app.get('/', function(req,res){
	res.sendFile(path.join(__dirname, 'public/index.html'))
})




app.use('/api', apiRoutes)


////==================Server Spinning==========================================
app.listen(port, function(){
  console.log('Server is spinning' + port)
})

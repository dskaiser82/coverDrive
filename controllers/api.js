var request = require('request');
var User = require('../models/user.js');
var jwt = require('jsonwebtoken');
var spotUrl =  "http://ws.audioscrobbler.com/2.0/?method=chart.gettoptracks&api_key=28cf53cf5d4faec6234d9cfbf1cc22dd&format=json"; //switched to Last FM API
var tubeUrl = "https://www.googleapis.com/youtube/v3/search?part=snippet&maxResults=10&q=rihanna+work+cover&key=AIzaSyDgxPMAszxU1vjw7E3QQoHLNLHLYjWXc14"  //this works on its own


module.exports = {
//======================USERS==================================================
  // index of users:
    index: function(req,res){
      User.find({}, function(err, users){
        if(err) return console.log(err)
        res.json(users)
      })
    },

  // create a user:
    create: function(req,res){
      User.create(req.body, function(err, user){
        if(err) return console.log(err)
        res.json(user)
      })
    },

    showUser: function(req,res){
      User.findOne({_id: req.params.id}, function(err, user){
        if(err) return console.log(err)
        res.json(user)
      })
    },

//======================Spotify and YouTube=====================================
  // show spotify on api/spotify....we will to add here, not to mention
  //the YouTube API
  	indexSpot: function(req,res){

          request({
        url: spotUrl, //URL to hit
        // qs: {from: 'blog example', time: +new Date()}, //Dont need this line
        method: 'POST',
        //Lets post the following key/values as form
        json: {
            // field1: 'data', //dont think you need these fields
            // field2: 'data'
        }
    }, function(error, response, body){
        if(error) {
            console.log(error);
        } else {
            res.json(body)
    }
    });
  }, //end indexSpot

  indexTube: function(req,res){


        request(tubeUrl, function (error, response, body) {
      if (!error && response.statusCode == 200) {
        var results = JSON.parse(body)
        res.json(results) // Show the HTML for the Google homepage.
      }
    })
 }, // end indext tubeUrl


 showTube: function(req,res){
   req.query.search


   var searchUrl = "https://www.googleapis.com/youtube/v3/search?part=snippet&maxResults=10&q="+req.query.search+
   "+cover%7Ccoverby+-audio+-idol&order=relevance&key=AIzaSyDgxPMAszxU1vjw7E3QQoHLNLHLYjWXc14"
   console.log(searchUrl)
   request(searchUrl, function(err, response, body){
     console.log(body)
     res.json(JSON.parse(body))
   })
 },
//+-presents+-vevo+-coverhook+-pranks+-parody+-amazing+-shazam+-lyrics+-playlist


//============================Authentication===================================

// runs when a user tries to log in
authenticate: function(req,res){
  User.findOne({email: req.body.email}, function(err, user){
    if(err) return console.log(err)
    if(!user) return res.json({success: false, message: "No user found :("})
    if(user && user.password != req.body.password) return res.json({success: false, message: "Wrong password :("})

    var token = jwt.sign(user.toObject(), process.env.SECRET, {
      expiresInMinutes: 1440
    })

    res.json({success: true, message: "You gots da token", token: token})

  })
},

// this method runs as middleware BEFORE a user tries to access a protected route:
protect: function(req, res, next){
  var token = req.body.token || req.query.token || req.headers['x-access-token']
  if(token){
    jwt.verify(token, process.env.SECRET, function(err, decoded){
      if(err) return res.json({success:false, message: "Failed to verify token :("})
      req.decoded = decoded
      next()
    })
  } else {
    return res.status(403).json({success: false, message: "No token provided :("})
  }
}


} //end

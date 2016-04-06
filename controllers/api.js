var request = require('request');
var User = require('../models/User.js');
var spotUrl =  "https://spotifycharts.com/api/?type=regional&country=global&recurrence=daily&date=latest&limit=10";
var tubeUrl = "https://www.googleapis.com/youtube/v3/search?part=snippet&maxResults=10&q=rihanna+work+cover&key=AIzaSyDgxPMAszxU1vjw7E3QQoHLNLHLYjWXc14"  //this works on its own


module.exports = {

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


   var searchUrl = "https://www.googleapis.com/youtube/v3/search?part=snippet&maxResults=10&q="+req.query.search+"+cover+-performs&order=relevance&topicId=music+cover&key=AIzaSyDgxPMAszxU1vjw7E3QQoHLNLHLYjWXc14"
   console.log(searchUrl)
   request(searchUrl, function(err, response, body){
     console.log(body)
     res.json(JSON.parse(body))
   })
 }
//+-presents+-vevo+-coverhook+-pranks+-parody+-amazing+-shazam+-lyrics+-playlist



} //end

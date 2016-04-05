var request = require('request');
var User = require('../models/User.js');
var spotUrl =  "https://spotifycharts.com/api/?type=regional&country=global&recurrence=daily&date=latest&limit=30&offset=0"


module.exports = {

  // show spotify on api/spotify....we will to add here, not to mention
  //the YouTube API
  	index: function(req,res){

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
  } //end index



} //end

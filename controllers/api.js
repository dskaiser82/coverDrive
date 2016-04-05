var request = require('request');
var User = require('../models/User.js');


module.exports = {

  // show spotify on api/spotify....we will to add here, not to mention
  //the YouTube API
  	index: function(req,res){

      request('https://spotifycharts.com/api/?type=regional&country=global&recurrence=daily&date=latest&limit=30&offset=0', function (error, response, body) {
        if (!error && response.statusCode == 200) {
          res.json(body) // Show the HTML for the Google homepage.
        }
      })

        // // res.json({message:"hello from my api index"})
  			// res.json(results)
  	}



} //end

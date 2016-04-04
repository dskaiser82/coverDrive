var mongoose = require('mongoose');
var Schema = mongoose.Schema

//embeded Schema
var playlistSchema = new mongoose.Schema({
	_by: {type: mongoose.Schema.Types.ObjectId, ref: "User"},
  song: String,
  artist: String,
  cover-artist: String,
  thumbnail: String

})




var userSchema = new Schema({
	name: String,
	email: String,
	password: String,
  playlist: [playlistSchema]
})

var User = mongoose.model('User', userSchema)

module.exports = User

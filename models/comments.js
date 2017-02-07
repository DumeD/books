var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var CommentsSchema = new Schema({
  author: String,
  text: String,
  bookHistory: Array
});

module.exports = mongoose.model('Comment', CommentsSchema);

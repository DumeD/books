var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var BooksSchema = new Schema({
  title: String,
  comments: [
    {
      author: String,
      comment: String
    }
  ]
});

module.exports = mongoose.model('Books', BooksSchema);

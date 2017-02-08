var express = require('express');
var bodyParser = require('body-parser');
var mongoose = require('mongoose');
var Comments = require('./models/comments');

var app = express();
var router = express.Router();

mongoose.connect('');

var port = process.env.PORT || 8080;

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

//To prevent errors from Cross Origin Resource Sharing, we will set our headers to allow CORS with middleware like so:
app.use(function(req, res, next) {
  res.setHeader('Access-Control-Allow-Origin', '*');
  res.setHeader('Access-Control-Allow-Credentials', 'true');
  res.setHeader('Access-Control-Allow-Methods', 'GET,HEAD,OPTIONS,POST,PUT,DELETE');
  res.setHeader('Access-Control-Allow-Headers', 'Access-Control-Allow-Headers, Origin,Accept, X-Requested-With, Content-Type, Access-Control-Request-Method, Access-Control-Request-Headers');

  //and remove cacheing so we get the most recent comments
  res.setHeader('Cache-Control', 'no-cache');
  next();
});

app.get('/', (req, res) => {
  res.json({ message: 'Api ready' });
});

router.route('/comments').get((req, res) => {
  Comments.find((err, comment) => {
    if(err) throw err;
    res.json(comment);
  });
}).post((req, res) => {
  var comment = new Comments();
  comment.author = req.body.author;
  comment.text = req.body.text;
  comment.bookHistory = req.body.bookHistory;

  comment.save((err) => {
    if(err) throw err;
    res.json({ message: 'Posted Successfully' });
  });
});

app.use('/api', router);


app.listen(port, () => {
  console.log('Listening on http://localhost:8080');
});

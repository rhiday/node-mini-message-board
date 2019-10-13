var express = require('express');
var router = express.Router();

const messages = [
  { text: "Hi there!", user: "Hasan", added: new Date() },
  { text: "Good morning", user: "Shahriar", added: new Date() },
  { text: "Good Afternoon", user: "Rhiday", added: new Date() },
  { text: "Hola Amigo", user: "Moti", added: new Date() }
];

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Mini messageboard', messages: messages });
});

/*GET new message page */
router.get('/new', function(req, res, next) {
  res.render('form', { title: 'Post message'})
});

/*POST request handling*/
router.post('/post', function(req, res, next) {
  messages.push({text: req.body.text, user: req.body.name, added: new Date()});
  res.redirect('/');
});

module.exports = router;

var express = require('express');
var bodyParser = require('body-parser');
var path = require('path');
var exphbs = require('express-handlebars');

var app = express();

//Setting up view engine
app.set('views', path.join(__dirname, 'views'));
app.engine('handlebars', exphbs({defaultLayout: 'main'}));
app.set('view engine', 'handlebars');

app.use(express.static(path.join(__dirname, 'public')));

//Body Parser middleware
// parse application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: false }));

// parse application/json
app.use(bodyParser.json());



//Home Page Route
app.get('/', function(req, res){
  res.render('home');
});

//registration Page
app.get('/projects', function(req, res){
  res.render('projects');
});

app.get('/academic', function(req, res){
  res.render('academic');
});

app.get('/experience', function(req, res){
  res.render('experience');
});

//Define the port to run on
app.listen(8080, function(){
    console.log('Server listenting on port 8080...');
});

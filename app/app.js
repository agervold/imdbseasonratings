var // Dependencies
express = require('express'),
bodyParser = require('body-parser'),
cookieParser = require('cookie-parser'),
request = require('request');

var app = express();

app.set('views', __dirname + '/views');
app.set('view engine', 'jade');

app
.use(express.static(__dirname + '/public'))
.use(bodyParser.urlencoded({ extended: false }))

app.get('/', function(req, res) {    
    res.render('index');
});

app.listen(8888);

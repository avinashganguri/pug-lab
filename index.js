var reqExpress = require('express');
var loginCookieParser = require('cookie-parser');
var app = reqExpress();
var bodyParser = require('body-parser')
app.use(bodyParser.urlencoded({extended: true}));
app.use(bodyParser.json());

app.set('view engine', 'pug');
app.use(reqExpress.static('public'));
app.use(loginCookieParser());

app.get('/', function(req, res){
   res.render('index')
});

app.post('/saveCookies', function(req, res){
   console.log("Body");
   console.log(req.body);
   res.cookie('loginCookie', req.body);
   res.render('display_Cookie');
});

app.post('/displayDetails', function (req,res) {
   res.render('display_Details',{loginCookie: req.cookies.loginCookie});
});
var port = process.env.PORT || 8080;
app.listen(port, function(){
   console.log("Listening to port 8080")
});

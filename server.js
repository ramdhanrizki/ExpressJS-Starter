var express = require('express'); 
var mongoose = require('mongoose');
var bodyParser = require('body-parser');
var app = express(); 
var engine = require('ejs-locals');

var port = process.env.PORT || 3000;

//setting bodyparser
app.use(bodyParser.json({
  limit: '10mb',
}));
app.use(bodyParser.urlencoded({
  extended: false,
  limit: '10mb',
}));

//setting ejs 
app.engine('ejs',engine);
app.set('view engine','ejs');

//connect mongoose
var dburl = "mongodb://localhost/ramdhanblog"; 
mongoose.connect(dburl);
mongoose.connection.on('error', () => {
  console.log('Connection Error.  Please make sure that MongoDB is running.');
  process.exit(1);
});

app.use('/api',require('./app/routes/api'));
app.use('/admin',require('./app/routes/admin'));
app.use('/',require('./app/routes/blog'));

app.listen(port,function(){
    console.log("Express Listening on port : "+port);
});
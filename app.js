/**
 * Module dependencies.
 */

var express = require('express')
  , http = require('http')
  , path = require('path')
  , OAuth = require('oauth')
  , config = require('./config.js');

var twitter = new OAuth.OAuth(
  'https://api.twitter.com/oauth/request_token',
  'https://api.twitter.com/oauth/access_token',
  config.CONSUMER_KEY,
  config.CONSUMER_SECRET,
  '1.0A',
  null,
  'HMAC-SHA1'
);

var app = express();

// all environments
app.set('port', process.env.PORT || 3000);
app.use(express.logger('dev'));
app.use(express.bodyParser());
app.use(express.methodOverride());
app.use(app.router);

// development only
if ('development' == app.get('env')) {
  app.use(express.errorHandler());
}

app.get('*', function(req,res){
  var url = req.originalUrl.replace('/1/','/1.1/');

  twitter.get(
    'https://api.twitter.com'+url,
    config.ACCESS_TOKEN,
    config.ACCESS_SECRET,
    function (e, data, response){
      if (e) console.error(e);
      res.send(data);
    });    
});

http.createServer(app).listen(app.get('port'), function(){
  console.log('Express server listening on port ' + app.get('port'));
});

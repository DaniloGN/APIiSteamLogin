var express = require('express')
var cors = require('cors')
app = express()
port = process.env.PORT || 3000
mongoose = require('mongoose')
Game = require('./api/models/iSteamUserModel')//created model loading here
bodyParser = require('body-parser')

// mongoose instance connection url connection
mongoose.Promise = global.Promise;
uri = "mongodb://uhelsexypctpdas:V9BlhKt57hOcpjZ6sXzz@bqi740piavkunk4-mongodb.services.clever-cloud.com:27017/bqi740piavkunk4";
mongoose.connect(uri);

app.use(cors())
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

app.use(function(req, res, next) {
  res.header("Access-Control-Allow-Origin", "*");
   res.header("Access-Control-Allow-Methods", "GET, PUT, POST, DELETE, OPTIONS");
  res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
  next();
});

var routes = require('./api/routes/iSteamRoutes'); //importing route
routes(app); //register the route

app.use(function(req, res) {
    res.status(404).send({url: req.originalUrl + ' not found'})
  });

app.listen(port);


console.log('iSteam Login API');
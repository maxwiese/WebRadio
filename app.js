var express = require('express');
var bodyParser = require('body-parser');
var path = require('path');
var exec = require('child_process').exec;
var stations = require('./config/radio_stations.json')

//create express app
var app = express();

//define static folder
app.use(express.static(__dirname + '/public'));

//parse request
app.use(bodyParser.urlencoded({
  extended: true
}))

//parse request
app.use(bodyParser.json())

//standard route
app.get('/', function(req, res) {
  res.send("hello world");
});

//custome routes
app.get('/run/:id', (req, res) => {
  var id = req.params.id;
      console.log(stations[id].url)
  /*
  exec('mplayer ' + id, (error, data) => {
    if (error){
      res.send(error);
    };
    res.json(data);
  });
  */
});

app.get('/stations', (req, res) => {
  res.json(stations)
});

//listen for request
app.listen(3000, function() {
  console.log("Server running on port: 3000");
});

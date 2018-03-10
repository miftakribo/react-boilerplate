var express = require('express')
var compression = require('compression')
var app = express()

app.use(compression());
// app.use(bodyParser.json());
// app.use(bodyParser.urlencoded({extended:true}));

app.use('/', express.static(__dirname + '/dist'))
app.get('/', function(req, res){
  res.sendFile(__dirname + '/dist/index.html')
})

app.get('*', function(req, res){
  res.send('server running')
})
var port = 3000
app.listen(port)

console.log('listen port ' + port)

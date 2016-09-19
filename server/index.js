const express = require('express');
const app = express();

app.use(express.static(__dirname + '/../app'));

app.get('*', function(req, res){
  res.send(__dirname);
});

const port= 3000;

app.listen(port);

console.log('running on port 3000');
console.log(`Current directory: ${process.cwd()}`);

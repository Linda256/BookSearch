const express = require('express');
const app = express();
const bodyParser = require('body-parser');

app.get('/', (req,res) => {
  res.send('Find you farorite book here!!!')
})

let port = 8080;
app.listen(port, function () {
  console.log(`Listenning on ${port}`)
});
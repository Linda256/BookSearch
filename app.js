const express = require('express');
const app = express();
const bodyParser = require('body-parser');

const mongoose = require ('mongoose');

mongoose.connect('mongodb://localhost/booksdb');

var db = mongoose.connection;

db.on('error', console.error.bind(console,'connection error: '))

db.once('open',function(){
  console.log('booksdb is connected!!')
})


app.get('/', (req,res) => {
  res.send('Find you farorite book here!!!')
})

//app.get()

let port = 8080;
app.listen(port, function () {
  console.log(`Listenning on ${port}`)
});
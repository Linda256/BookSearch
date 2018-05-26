const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const Book = require('./database/book');


app.get('/', (req,res) => {
  res.send('Find you farorite books here!!!')
})

app.get('/books', (req,res) => {
  var limit = 10;
  Book.getBooks(limit,(err,books) =>{;
    if (err) throw err;
    res.json(books);
  });
});

let port = 8080;
app.listen(port, function () {
  console.log(`Listenning on ${port}`)
});
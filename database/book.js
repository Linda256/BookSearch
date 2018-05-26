
const mongoose = require ('mongoose');

mongoose.connect('mongodb://localhost/booksdb');

var db = mongoose.connection;

db.on('error', console.error.bind(console,'connection error: '))

db.once('open',function(){
  console.log('booksdb is connected!!')
})

//book Schema
var bookSchema = mongoose.Schema({
  title:{
    type:String,
    required:true
  },
  author:{
    type:String,
    required:true
  },
  despription:{
    type:String
  },
  genre:{
    type:String
  },
  create_date:{
    type: Date,
    default:Date.now
  }
})

var Book = module.exports = mongoose.model('Book',bookSchema)
module.exports.getBooks = (limit,callback) => {
  Book.find(callback).limit(limit);
}

//getBookByTitle
//getBookByAuthor
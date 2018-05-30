import React, { Component } from 'react';
import './Books.css';

class Books extends Component {
  constructor(props){
    super(props);
    this.state ={
      books:[]
    }
  }
  componentDidMount(){
    fetch(`/books`)
    .then(res => res.json())
    .then(books => this.setState({books},() => console.log('Books fetched...',books)));
  }
  render() {
      let categoryOptions = this.state.books.map(book => {
             return <option key={book._id}  value = ' category'> {book.genre}</option>
          });

    return (
      <div >
          <div>
            <label>Title</label><br />
            <input type='text' ref ='title' />
          </div>
          <div>
            <label>Author</label><br />
            <input type='text' ref ='author' />
          </div>
          <div>
            <label>Genre</label><br />
            <select ref ='category' >
              {categoryOptions}
            </select>
          </div>
          <input type='submit' value ='Search' />

          <h2>Books</h2>
          <ul>
          {this.state.books.map(book => <li key={book._id}> <strong> {book.title} </strong>  : {book.author}</li>)}
          </ul>
      </div>
    );
  }
}

export default Books;
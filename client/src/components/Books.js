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
    return (
      <div >
          <h2>Books</h2>
          <ul>
          {this.state.books.map(book => <li key={book._id}> <strong> {book.title} </strong>  : {book.author}</li>)}
          </ul>
      </div>
    );
  }
}

export default Books;
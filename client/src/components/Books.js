import React, { Component } from 'react';
import './Books.css';

class Books extends Component {
  constructor(){
    super();
    this.state ={
      books:[]
    }
  }
  componentDidMount(){
    fetch(`/books`,{
      method:'GET'
    })
    .then(res => res.json())
    .then(books => this.setState({books},() => console.log('Books fetched...',books)));
  }
  render() {
    return (
      <div >
          <h2>Books</h2>
      </div>
    );
  }
}

export default Books;
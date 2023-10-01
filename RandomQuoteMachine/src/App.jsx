import React from 'react';
import ReactDOM from 'react-dom';
import { useState } from 'react'
import './App.css'

class MyApp extends React.Component {
  constructor(props) {
    super(props);
  }
  state = { 
    quote: {
      author: '',
      text: ''
    }
   };

   getQuote() {
    // You can make an API request here and update the state with the retrieved quote
    // For this example, I'll use a placeholder quote
    const placeholderQuote = {
      author: 'John Doe',
      text: 'This is a random quote.'
    };

    this.setState({ quote: placeholderQuote });
  }


  render() { 
    return ( 
      <div>
        <div>
          <h1>Random Quote Machine</h1>
          <button onClick={() => this.getQuote()}>Get Random Quote</button>
        </div>
        <div>
          <p>{this.state.quote.text}</p>
          <p>- {this.state.quote.author}</p>
        </div>
      </div>
     );
  }
}
 
export default MyApp;

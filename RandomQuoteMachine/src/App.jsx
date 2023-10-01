import React from 'react';
import ReactDOM from 'react-dom';
import { useState } from 'react'
import './App.css'

class MyApp extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      quote: {
        author: '',
        text: ''
      },
      bgColor: '#ffffff' // Initial background color
    };
  }

  // Function to fetch a random quote from an API
  getQuote() {
    // You can make an API request here and update the state with the retrieved quote
    // For this example, I'll use a placeholder quote
    const placeholderQuote = {
      author: 'John Doe',
      text: 'This is a random quote.'
    };

    // Generate a random background color
    const randomColor = '#' + Math.floor(Math.random()*16777215).toString(16);

    this.setState({
      quote: placeholderQuote,
      bgColor: randomColor // Update the background color
    });
  }

  render() {
    const { bgColor } = this.state;

    return (
      <div style={{ backgroundColor: this.state.bgColor  }}>
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

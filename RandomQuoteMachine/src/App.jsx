import React from 'react';
import ReactDOM from 'react-dom';
import { faTwitter } from '@fortawesome/free-brands-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { useState } from 'react';
import './App.css';

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
  async getQuote() {
    try {
        const response = await fetch('https://type.fit/api/quotes');
        const data = await response.json();
        const index = Math.floor(Math.random() * data.length);

        let author = data[index].author;
        // Elimina ", type.fit" del autor si está presente
        author = author.replace(', type.fit', '');

        const newQuote = {
            author: author,
            text: data[index].text
        };

        const randomColor = '#' + Math.floor(Math.random() * 16777215).toString(16);

        this.setState({
            quote: newQuote,
            bgColor: randomColor
        });
    } catch (error) {
        console.error('Error fetching quote:', error);
    }
}

shareToTwitter() {
  // Construct the tweet URL with the current quote and author
  const tweetText = `${this.state.quote.text} - ${this.state.quote.author}`;
  const tweetUrl = `https://twitter.com/intent/tweet?text=${encodeURIComponent(tweetText)}`;

  // Open a new window to create a tweet
  window.open(tweetUrl, '_blank');
}

  render() {
    const { bgColor } = this.state;
    return (
      <div style={{ backgroundColor: this.state.bgColor  }} id="quote-box">
        <div>
          <h1>Random Quote Machine</h1>
          <button onClick={() => this.getQuote()} id="new-quote">Get Random Quote</button>
          <a id="tweet-quote" href="https://twitter.com/intent/tweet" onClick={(e) => { e.preventDefault(); this.shareToTwitter(); }}>
          <FontAwesomeIcon icon={faTwitter} />
        </a>
        </div>
        <div>
          <p id="text">{this.state.quote.text}</p>
          <p id="author">- {this.state.quote.author}</p>
        </div>
      </div>
    );
  }
}
 
export default MyApp;

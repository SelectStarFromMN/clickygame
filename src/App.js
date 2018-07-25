import React, { Component } from 'react';
import './App.css';
import cards from "./cards.json";
import Card from "./components/Card";

class App extends Component {

  // Setting this.state.cards to the cards json array
  state = {
    cards,
    clickedCardIds: []
  };

  // Efficient O(n) Durstenfeld-Shuffle (located on StackExchange)
  shuffleCards = () => {
    for (let i = cards.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [cards[i], cards[j]] = [cards[j], cards[i]]; // eslint-disable-line no-param-reassign
    }
  }

  // On App Render, shuffle the cards and display each one
  render() {
    this.shuffleCards();
    return (
      <div className="App">
        {this.state.cards.map(card => (
          <Card
            key={card.id}
            id={card.id}
            imageurl={card.imageurl}
          />
        ))}
      </div>
    );
  }
}

export default App;

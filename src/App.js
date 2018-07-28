import React, { Component } from 'react';
import './App.css';
import cards from "./cards.json";
import Card from "./components/Card";
import Scoreboard from './components/Scoreboard';

class App extends Component {

  // Setting this.state
  state = {
    cards,
    clickedCardIds: [],
    message: "Click on a bird to earn points, but don't click the same bird twice!",
    score: 0,
    topScore: 0
  };

  // Efficient O(n) Durstenfeld-Shuffle (located on StackExchange)
  shuffleCards = () => {
    console.log("Shuffling....")
    for (let i = this.state.cards.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [this.state.cards[i], this.state.cards[j]] = [this.state.cards[j], this.state.cards[i]]; // eslint-disable-line no-param-reassign
    }
  }

  cardClickHandler = (cardId) => {
    console.log('Clicked: ' + cardId)
    let clickedCards = this.state.clickedCardIds;
    let message = this.state.message;
    let topScore = this.state.topScore;
    let score = this.state.score;

    if (clickedCards.includes(cardId)) {
      message = "Ooops, you already clicked that one! Click an image to restart!";
      clickedCards = [];
      console.log(message);
    } else {
      clickedCards.push(cardId);
      if (clickedCards.length === this.state.cards.length) {
        message = "You WON! Click an image to restart!";
        clickedCards = [];
        topScore = this.state.cards.length;
        console.log(message);
      } else {
        message = "Nice job, keep going!";
        console.log(message);
      }
    }

    score = clickedCards.length;
    topScore = Math.max(topScore, clickedCards.length)
    console.log("TopScore: " + topScore)

    // Trigger state change
    this.setState({ cards, clickedCardIds: clickedCards, score: score, topScore: topScore, message: message });
  }

  // On App Render, shuffle the cards and display each one
  render() {
    this.shuffleCards();
    return (
      <div className="App" >
        <Scoreboard
          score={this.state.score}
          topscore={this.state.topScore}
          message={this.state.message}
        />
        <div className="cardCanvas">
          {this.state.cards.map(card => (
            <Card
              key={card.id}
              id={card.id}
              imageurl={card.imageurl}
              clickHandler={this.cardClickHandler}
            />
          ))}
        </div>
      </div>
    );
  }
}

export default App;

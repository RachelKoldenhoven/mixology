import React, { Component } from 'react';
import './App.css';

import DrinkCard from './DrinkCard.js';

class App extends Component {
  state = { drinks: [] };

  componentDidMount() {
    fetch('/drinks')
      .then((res) => res.json())
      .then((drinks) => this.setState({ drinks }));
  }

  render() {
    return (
      <div>
        <div className="App">
          <h1>Drinks</h1>
          <div className="Container">
            {this.state.drinks.map((drink) => (
              <DrinkCard key={drink.id} drink={drink}></DrinkCard>
            ))}
          </div>
        </div>
      </div>
    );
  }
}

export default App;

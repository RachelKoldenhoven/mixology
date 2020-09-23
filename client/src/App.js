import React, { Component } from 'react';
import { Button } from '@react-md/button';
import { Text } from '@react-md/typography';
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
          {this.state.drinks.map((drink) => (
            <DrinkCard drink={drink}></DrinkCard>
          ))}
        </div>
      </div>
    );
  }
}

export default App;

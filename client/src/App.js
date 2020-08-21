import React, { Component } from 'react';
import './App.css';

class App extends Component {
  state = { drinks: [] };

  componentDidMount() {
    fetch('/drinks')
      .then((res) => res.json())
      .then((drinks) => this.setState({ drinks }));
  }

  render() {
    return (
      <div className="App">
        <h1>Drinks</h1>
        {this.state.drinks.map((drink) => (
          <div key={drink.id}>{drink.name}</div>
        ))}
      </div>
    );
  }
}

export default App;

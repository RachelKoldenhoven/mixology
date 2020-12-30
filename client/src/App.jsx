import React, { Component } from 'react';
import './index.scss';

import DrinkCard from './DrinkCard';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      drinks: [],
    };
  }

  componentDidMount() {
    fetch('/drinks')
      .then((res) => res.json())
      .then((drinks) => this.setState({ drinks }));
  }

  render() {
    const { drinks } = this.state;
    return (
      <div>
        <div className="App">
          <h1>Drinks</h1>
          <div className="Container">
            {drinks.map((drink) => (
              <DrinkCard key={drink.id} drink={drink}/>
            ))}
          </div>
        </div>
      </div>
    );
  }
}

export default App;

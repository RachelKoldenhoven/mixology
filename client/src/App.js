import React, { Component } from 'react';
import { Button } from '@react-md/button';
import {
  Card,
  CardHeader,
  CardTitle,
  CardActions,
  CardContent,
} from '@react-md/card';
import { Text } from '@react-md/typography';
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
      <>
        <div className="App">
          <h1>Drinks</h1>
          {this.state.drinks.map((drink) => (
            <div key={drink.id}>{drink.name}</div>
          ))}
        </div>
        <Card>
          <CardHeader>
            <CardTitle>Card Title</CardTitle>
          </CardHeader>
          <CardContent>
            <Text>Here is some text to display in the card. It is </Text>
          </CardContent>
          <CardActions>
            <Button>Action 1</Button>
            <Button>Action 2</Button>
          </CardActions>
        </Card>
      </>
    );
  }
}

export default App;

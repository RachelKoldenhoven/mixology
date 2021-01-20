import React, { Component } from "react";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import "./index.scss";

import CreateDrink from "./CreateDrink";
import Drinks from "./Drinks";

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      drinks: [],
    };
  }

  /*
    To Do 01-12-21
    Refactor componentDidMount() to useEffect()
    Call another function inside useEffect() and set drinks there
    useEfect -- use empty []
  */
  componentDidMount() {
    fetch("/drinks")
      .then((res) => res.json())
      .then((drinks) => this.setState({ drinks }));
  }

  render() {
    const { drinks } = this.state;
    return (
      <>
        <Router>
          <div>
            <ul>
              <li>
                <Link to='/'>Drinks</Link>
              </li>
              {/* <li>
                <Link to='/drink'>Drink</Link>
              </li> */}
              <li>
                <Link to='/createDrink'>Create Drink</Link>
              </li>
            </ul>

            <Switch>
              {/* <Route path='/drink'>
                <Drink />
              </Route> */}
              <Route path='/createDrink'>
                <CreateDrink />
              </Route>
              <Route path='/'>
                <Drinks drinks={drinks} />
              </Route>
            </Switch>
          </div>
        </Router>
      </>
    );
  }
}

export default App;

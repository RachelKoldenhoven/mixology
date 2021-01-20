import React, { useEffect, useState } from 'react';
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom';
import './index.scss';
import axios from 'axios';

import CreateDrink from './CreateDrink';
import Drinks from './Drinks';

function App() {
  const [drinks, setDrinks] = useState([]);
  const [drinkSelected, setDrinkSelected] = useState('pinaColada');

  const fetchDrinks = async () => {
    const res = await axios.get('/drinks', {});
    setDrinks(res.data);
  };

  useEffect(() => {
    fetchDrinks();
  }, []);

  return (
    <>
      <Router>
        <div>
          <ul>
            <li>
              <Link to="/">Drinks</Link>
            </li>
            {/* <li>
              <Link to='/drink'>Drink</Link>
            </li> */}
            <li>
              <Link to="/createDrink">Create Drink</Link>
            </li>
          </ul>

          <Switch>
            <Route path={`/${drinkSelected}`}>
              <h1>Hellow World!</h1>
            </Route>

            <Route path="/createDrink">
              <CreateDrink />
            </Route>

            <Route path="/">
              <Drinks drinks={drinks} />
            </Route>
          </Switch>
        </div>
      </Router>
    </>
  );
}

export default App;

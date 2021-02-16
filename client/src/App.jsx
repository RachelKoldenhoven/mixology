import React, { useEffect, useState } from 'react';
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom';
import './index.scss';
import axios from 'axios';

import CreateDrink from './CreateDrink';
import Drinks from './Drinks';
import DrinkDetail from './DrinkDetail';
import { makeKebobCase } from './utils';

function App() {
  const [drinks, setDrinks] = useState([]);
  const [drinkSelected, setDrinkSelected] = useState('pinaColada');
  const [drinkSelectedDetails, setDrinkSelectedDetails] = useState({});

  const fetchDrinks = async () => {
    const res = await axios.get('/drinks', {});
    setDrinks(res.data);
  };

  useEffect(() => {
    window.history.pushState({}, '', `/drinks/${drinkSelected}`);
    const navEvent = new PopStateEvent('popstate');
    window.dispatchEvent(navEvent);
    const drink = drinks.filter((drink) => {
      const urlName = makeKebobCase(drink.name);
      return urlName === drinkSelected;
    });
    setDrinkSelectedDetails(drink[0]);
    console.log('drink', drink);
  }, [drinkSelected]);

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
            <li>
              <Link to="/createDrink">Create Drink</Link>
            </li>
          </ul>

          <Switch>
            <Route path={`/drinks/${drinkSelected}`}>
              <DrinkDetail drink={drinkSelectedDetails}></DrinkDetail>
            </Route>

            <Route path="/createDrink">
              <CreateDrink />
            </Route>

            <Route path="/">
              <Drinks drinks={drinks} setDrinkSelected={setDrinkSelected} />
            </Route>
          </Switch>
        </div>
      </Router>
    </>
  );
}

export default App;

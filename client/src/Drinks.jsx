import React from 'react';
import DrinkCard from './DrinkCard';

function Drinks({ drinks, setDrinkSelected }) {
  return (
    <div className="App">
      <h1>Drinks</h1>
      <div className="Container">
        {drinks.map((drink) => (
          <DrinkCard
            key={drink.id}
            drink={drink}
            setDrinkSelected={setDrinkSelected}
          />
        ))}
      </div>
    </div>
  );
}

export default Drinks;

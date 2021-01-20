import React from 'react';
import DrinkCard from './DrinkCard';

function Drinks(props) {
  const { drinks } = props;

  return (
    <div className="App">
      <h1>Drinks</h1>
      <div className="Container">
        {drinks.map((drink) => (
          <DrinkCard key={drink.id} drink={drink} />
        ))}
      </div>
    </div>
  );
}

export default Drinks;

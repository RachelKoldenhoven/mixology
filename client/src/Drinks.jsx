import React, { useEffect, useState } from "react";
import DrinkCard from "./DrinkCard";
import axios from "axios";

function Drinks() {
  const [drinks, setDrinks] = useState([]);

  const getDrinks = async () => {
    const res = await axios.get("/drinks", {});
    setDrinks(res.data);
  };

  useEffect(() => {
    getDrinks();
  }, []);

  return (
    <div className='App'>
      <h1>Drinks</h1>
      <div className='Container'>
        {drinks.map((drink) => (
          <DrinkCard key={drink.id} drink={drink} />
        ))}
      </div>
    </div>
  );
}

export default Drinks;

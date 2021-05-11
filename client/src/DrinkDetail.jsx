import React, { useEffect, useState } from 'react';
import styles from './DrinkDetail.module.scss';
import axios from 'axios';

const pinaImage = require('./assests/images/pina_colada.jpeg');

const DrinkDetail = ({ drink }) => {
  const [ingredients, setIngredients] = useState([]);

  const getIngredients = async () => {
    if (drink) {
      const res = await axios.post('/ingredients', {
        params: {
          drinkId: drink.id,
        },
      });
      setIngredients(res.data);
    }
  };

  useEffect(() => {
    getIngredients();
  }, [drink]);

  if (!drink) return null;

  return (
    <div className={styles.container}>
      <div className={styles.header}>
        <h1 className={styles.title}>{drink.name}</h1>
        <p className={styles.details}>
          {drink.categoryid} | {drink.glass}
        </p>
      </div>

      <div className={styles.body}>
        <div className={styles.imageContainer}>
          <img className={styles.image} src={pinaImage} alt="" />
          {/* <p>{drink.imageurl}</p> */}
        </div>

        <div className={styles.recipe}>
          <h3>Ingredients</h3>
          <ul className={styles.ingredientList}>
            {ingredients.map((ingredient) => {
              return (
                <li key={ingredient.name}>
                  {ingredient.name} | {ingredient.amount}
                </li>
              );
            })}
          </ul>
          <p>Garnish with {drink.garnish}</p>
          <div>
            <p>{drink.directions}</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DrinkDetail;

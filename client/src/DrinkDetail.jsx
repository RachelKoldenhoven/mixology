import React from 'react';
import PropTypes from 'prop-types';
import styles from './DrinkDetail.module.scss';

const pinaImage = require('./assests/images/pina_colada.jpeg');

const DrinkDetail = ({ drink }) => {
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
          <p>ingredients</p>
          <p>{drink.garnish}</p>
          <div>
            <p>{drink.directions}</p>
          </div>
          <div>
            <p>{drink.garnish}</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DrinkDetail;

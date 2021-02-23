import React from 'react';
import PropTypes from 'prop-types';

const DrinkDetail = ({ drink }) => {
  if (!drink) return null;
  return (
    <div>
      {drink.name}. {drink.garnish}
    </div>
  );
};

export default DrinkDetail;

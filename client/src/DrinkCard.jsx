import React from 'react';
import PropTypes from 'prop-types';
import { makeKebobCase } from './utils';

import { Card, CardHeader, CardTitle, CardContent } from '@react-md/card';
import { MediaContainer } from '@react-md/media';
import { Text } from '@react-md/typography';

const pinaImage = require('./assests/images/pina_colada.jpeg');
// const negroniImage = require('./assests/images/negroni_drink.jpeg');
// const manhattanImage = require('./assests/images/manhattan_drink.jpeg');
// const aviationImage = require('./assests/images/Aviation_gin_Cocktail.jpg');

const DrinkCard = ({ drink, setDrinkSelected }) => {
  const getDrinkName = () => {
    const { name } = drink;
    const urlName = makeKebobCase(name);
    setDrinkSelected(urlName);
  };

  return (
    <div className="Card" onClick={getDrinkName}>
      <Card>
        <CardHeader>
          <CardTitle>{drink.name}</CardTitle>
        </CardHeader>
        <CardContent>
          <MediaContainer fullWidth>
            <img src={pinaImage} alt="" />
          </MediaContainer>
          <Text>{drink.directions}</Text>
        </CardContent>
      </Card>
    </div>
  );
};

export default DrinkCard;

DrinkCard.propTypes = {
  drink: PropTypes.object.isRequired,
};

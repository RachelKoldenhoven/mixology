import React from 'react';
import PropTypes from 'prop-types';

import { Card, CardHeader, CardTitle, CardContent } from '@react-md/card';
import { MediaContainer } from '@react-md/media';
import { Text } from '@react-md/typography';

const pinaImage = require('./assests/images/pina_colada.jpeg');

const DrinkCard = ({ drink, setDrinkSelected }) => {
  const getDrinkName = () => {
    const { name } = drink;
    const urlName = name
      .match(
        /[A-Z]{2,}(?=[A-Z][a-z]+[0-9]*|\b)|[A-Z]?[a-z]+[0-9]*|[A-Z]|[0-9]+/g
      )
      .map((x) => x.toLowerCase())
      .join('-');
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

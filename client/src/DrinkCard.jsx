import React from "react";
import PropTypes from "prop-types";

import { Card, CardHeader, CardTitle, CardContent } from "@react-md/card";
import { MediaContainer } from "@react-md/media";
import { Text } from "@react-md/typography";

const pinaImage = require("./assests/images/pina_colada.jpeg");

const DrinkCard = ({ drink }) => {
  return (
    <div>
      <div className='Card'>
        <Card>
          <CardHeader>
            <CardTitle>{drink.name}</CardTitle>
          </CardHeader>
          <CardContent>
            <MediaContainer fullWidth>
              <img src={pinaImage} alt='' />
            </MediaContainer>
            <Text>{drink.directions}</Text>
          </CardContent>
        </Card>
      </div>
    </div>
  );
};

export default DrinkCard;

DrinkCard.propTypes = {
  drinks: PropTypes.object.isRequired,
};

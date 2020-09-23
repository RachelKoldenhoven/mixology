import React, { useState, useEffect } from 'react';
import { Button } from '@react-md/button';
import {
  Card,
  CardHeader,
  CardTitle,
  CardActions,
  CardContent
} from '@react-md/card';
import { MediaContainer } from '@react-md/media';
import { Text } from '@react-md/typography';

const pinaImage =  require('./assests/images/pina_colada.jpeg');

const DrinkCard = ({drink}) => {
    return (
        <div>
            <div className="Card">
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
        </div>
    );
}

export default DrinkCard;
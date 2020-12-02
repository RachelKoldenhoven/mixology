ALTER TABLE drinks
ADD categoryId CHAR(10),
ADD directions VARCHAR(1000),
ADD garnish CHAR(255),
ADD glass CHAR(30),
ADD imageUrl CHAR(255);

UPDATE drinks
SET 
    categoryId = '3',
    directions = 'Put the ice, frozen pineapple, juice, coconut cream, and the white and dark rums into a blender. Blend until smooth and frosty. Pour the drink into 2 glasses and garnish the rim with pineapple slices.',
    garnish = 'Pineapple slices',
    glass = 'Hurricane'
WHERE name = 'Pina Colada';


UPDATE drinks
SET 
    categoryId = '1',
    directions = 'Add all the ingredients into a mixing glass with ice, and stir until well-chilled.',
    garnish = 'brandied cherry',
    glass = 'Coupe'
WHERE name = 'Manhattan';

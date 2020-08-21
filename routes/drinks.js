var express = require('express');
var router = express.Router();

/* GET drinks listing. */
router.get('/', function (req, res, next) {
  // res.send('respond with a resource');
  res.json([
    {
      id: 1,
      categoryId: 3,
      name: 'Pina Colada',
      directions:
        'Put the ice, frozen pineapple, juice, coconut cream, and the white and dark rums into a blender. Blend until smooth and frosty. Pour the drink into 2 glasses and garnish the rim with pineapple slices.',
      garnish: 'Pineapple slices',
      glass: 'Hurricane',
      image: '',
      ingredients: [
        '1 1/2 cup ice',
        '1/2 cup diced pineapple, frozen',
        '2 ounces pineapple juice',
        '2 ounces Coco Lopez coconut cream',
        '1 1/2 ounces white rum',
        '1 ounce dark rum',
      ],
    },
    {
      id: 2,
      categoryId: 1,
      name: 'Manhattan',
      directions:
        'Add all the ingredients into a mixing glass with ice, and stir until well-chilled.',
      garnish: 'brandied cherry',
      glass: 'Coupe',
      image: '',
      ingredients: [
        '2 ounces bourbon or rye',
        '1 ounce sweet vermouth',
        '2 dashes Angostura bitters',
        '1 dash orange bitters',
      ],
    },
    {
      id: 3,
      categoryId: 5,
      name: 'Aviation',
      directions: 'Add all ingredients into a shaker with ice and shake.',
      garnish: 'brandied cherry',
      glass: 'Martini glass',
      image: '',
      ingredients: [
        '2 ounces gin',
        '1/2 ounce maraschino liqueur',
        '1/2 ounce crème de violette or crème yvette',
        '3/4 ounce fresh lemon juice',
      ],
    },
    {
      id: 4,
      categoryId: 2,
      name: 'Negroni',
      directions:
        'To flavour your Negroni, simply mix the gin, vermouth, Campari or bitter liqueur and peppercorns together.  Leave overnight, or for a couple of days, so the flavours infuse, leaving you with a light, sweet, bitter, spicy dimension to your cocktail.  Stir into a glass of ice and add a nice slice of orange to garnish.',
      garnish: 'Orange slice',
      glass: 'Rocks glass',
      image: '',
      ingredients: [
        '25 ml Bombay Sapphire gin',
        '25 ml Martini Rosso (red vermouth)',
        '25 ml Campari or bitter liqueur',
        '5 whole pink peppercorns',
        '1 blood orange or regular orange',
      ],
    },
  ]);
});

module.exports = router;

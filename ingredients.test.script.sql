
CREATE TABLE ingredients (
    ID SERIAL PRIMARY KEY,
    name VARCHAR(30)
);

INSERT INTO ingredients (name)
  VALUES('Pineapple'),('Ice'),('Pineapple'),('Coconut Cream'),('White Rum'),('Dark Rum'),('Bourbon'),('Sweet Vermouth'),('Orange Bitters'),('Angostura Bitters'),('Gin'),('Maraschino Liqueur'),('Creme de Violette'),('Lemon Juice'),('Campari'),('Peppercorns');



CREATE TABLE categories (
    ID SERIAL PRIMARY KEY,
    name VARCHAR(30)
);

INSERT INTO categories (name)
  VALUES('Bourbon'),('Gin'),('Rum'),('Tequila'),('Summer'),('Winter'),('Fall'),('Tropcial'),('Hot'),('Cold');




// change categoryID once we run migration
INSERT INTO table_name (column1, column2, column3, ...)
VALUES (value1, value2, value3, ...);

INSERT INTO drinks (name, catergoryId, directions, garnish, glass)
  VALUES ('Aviation', '1', 'Add all ingredients into a shaker with ice and shake.', 'brandied cherry', 'Martini glass');
  VALUES('Negroni', '1', 'To flavour your Negroni, simply mix the gin, vermouth, Campari or bitter liqueur and peppercorns together.  Leave overnight, or for a couple of days, so the flavours infuse, leaving you with a light, sweet, bitter, spicy dimension to your cocktail.  Stir into a glass of ice and add a nice slice of orange to garnish.', 'Orange slice', 'Rocks glass');



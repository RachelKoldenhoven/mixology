CREATE TABLE drinkIngredients (
    drink_id INT,
    ingredient_id INT,
    amount VARCHAR(244)
);

INSERT INTO drinkIngredients (drink_id, ingredient_id, amount)
    VALUES(1, 1, '0.5 cup diced frozen'), (1, 2, '1.5 cups'), (1, 3, '2 ounces'), (1, 4, '2 ounces'), (1, 5, '1.5 ounces'), (1, 6, '1 ounces'), (2, 7, '2 ounces'), (2, 8, '1 ounces'), (2, 9, '1 dash'), (2, 10, '2 dash'), (5, 11, '2 ounces'), (5, 12, '0.5 ounces'), (5, 13, '0.5 ounces'), (5, 15, '0.75 ounces'), (6, 13, '1 ounce'), (6, 15, '1 ounce'), (6, 8, '1 ounces'), (6, 16, '5');


UPDATE ingredients
SET 
    name = 'Pineapple Juice'
WHERE id = 3;


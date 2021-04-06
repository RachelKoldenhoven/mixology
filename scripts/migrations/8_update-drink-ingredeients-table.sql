DROP TABLE IF EXISTS drinkingredients;

CREATE TABLE drinkingredients (
    drink_id INT,
    ingredient_id INT,
    amount VARCHAR(244)
);

INSERT INTO drinkingredients (drink_id, ingredient_id, amount)
    VALUES
        (1, 1, '0.5 cup diced frozen'),
        (1, 2, '1.5 cups'),
        (1, 3, '2 ounces'),
        (1, 4, '2 ounces'),
        (1, 5, '1.5 ounces'),
        (1, 6, '1 ounces'),
        (2, 7, '2 ounces'),
        (2, 8, '1 ounces'),
        (2, 9, '1 dash'),
        (2, 10, '2 dash'),
        (3, 11, '2 ounces'),
        (3, 12, '0.5 ounces'),
        (3, 13, '0.5 ounces'),
        (3, 14, '0.75 ounces'), 
        (4, 11, '1 ounce'),
        (4, 15, '1 ounce'),
        (4, 8, '1 ounces'), 
        (4, 16, '5');




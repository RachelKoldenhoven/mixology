CREATE TABLE categories (
    ID SERIAL PRIMARY KEY,
    name VARCHAR(30)
);

INSERT INTO categories (name)
  VALUES('Bourbon'),('Gin'),('Rum'),('Tequila'),('Summer'),('Winter'),('Fall'),('Tropcial'),('Hot'),('Cold');

CREATE TABLE drinks (
  ID SERIAL PRIMARY KEY,
  name VARCHAR(30)
);

INSERT INTO drinks (name)
  VALUES ('Pina Colada'), ('Manhattan');
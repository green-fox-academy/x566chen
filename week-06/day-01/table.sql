CREATE TABLE todo (
  ID int,
  Item VARCHAR(255),
  Complete VARCHAR(255)
);

INSERT INTO todo (ID, Item, Complete) VALUES (1, "Drink Water","YES"), (2, "Eat pizza","NO"),(3, "Sleep","YES");

SELECT Item FROM todo
WHERE Complete = "YES";
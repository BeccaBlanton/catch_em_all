DROP DATABASE IF EXISTS pokemon_db;

CREATE DATABASE pokemon_db;

USE pokemon_db;


CREATE TABLE pokemon (
  id int AUTO_INCREMENT NOT NULL,
  pokemon_name varchar(30) NOT NULL,
  caught BOOLEAN,
  PRIMARY KEY(id)
);
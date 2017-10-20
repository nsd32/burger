DROP DATABASE IF EXISTS burgers_db;
CREATE database burgers_db;

USE burgers_db;

CREATE TABLE burgers (

	id INT AUTO_INCREMENT,
	burger_name VARCHAR(100) NOT NULL,
	devoured BOOLEAN,
	date TIMESTAMP,
	PRIMARY KEY (id)

)
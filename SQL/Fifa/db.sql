CREATE TABLE Person(
    id VARCHAR(50) PRIMARY KEY,
    name VARCHAR(50) 
);


CREATE TABLE Coach(
    id VARCHAR(50) PRIMARY KEY,
    team VARCHAR(50) , 
    FOREIGN KEY (id) REFERENCES Person(id)
);

CREATE TABLE Player(
    id VARCHAR(50) PRIMARY KEY,
    team VARCHAR(50) , 
    age INT , 
    FOREIGN KEY (id) REFERENCES Person(id)
);

CREATE TABLE Refree(
    id VARCHAR(50) PRIMARY KEY,
    fifa_grade VARCHAR(50) , 
    FOREIGN KEY (id) REFERENCES Person(id)
);

CREATE TABLE Team(
    name varchar(30) PRIMARY KEY
);
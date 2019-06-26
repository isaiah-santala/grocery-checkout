CREATE DATABASE checkout;

USE checkout;

CREATE TABLE personal (
    id integer NOT NULL AUTO_INCREMENT,
    name varchar(100) NOT NULL, 
    email varchar(100) NOT NULL, 
    password varchar(100) NOT NULL, 
    primary key (id)
);

CREATE TABLE shipping (
    id integer NOT NULL AUTO_INCREMENT,
    line1 varchar(100) NOT NULL, 
    line2 varchar(100) NOT NULL, 
    city varchar(100) NOT NULL, 
    state varchar(100) NOT NULL, 
    zip varchar(100) NOT NULL, 
    phone varchar(100) NOT NULL, 
    primary key (id)
);

CREATE TABLE payment (
    id integer NOT NULL AUTO_INCREMENT,
    cardNumber varchar(100) NOT NULL, 
    exp varchar(100) NOT NULL, 
    cvv varchar(100) NOT NULL, 
    billingzip varchar(100) NOT NULL, 
    primary key (id)
);
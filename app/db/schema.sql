DROP DATABASE IF EXISTS goldie_mohr;

create database goldie_mohr;
use goldie_mohr;

create table user(

userID INTEGER AUTO_INCREMENT NOT NULL PRIMARY KEY,
email varchar(30),
password varchar (30),
first_name varchar (30),
last_name varchar (30),
phone_number varchar (20),
user_image BLOB

);


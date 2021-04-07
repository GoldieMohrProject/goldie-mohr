DROP DATABASE IF EXISTS goldie_mohr;

create database goldie_mohr;
use goldie_mohr;

create table user(

userID INTEGER AUTO_INCREMENT NOT NULL PRIMARY KEY,
isAdmin boolean default 0,
authId boolean default 0,
email varchar(30),
password varchar (100),
first_name varchar (30),
last_name varchar (30),
phone_number varchar (15),
picture BLOB,
token varchar(60)

);

create table user_scores(
    id INTEGER AUTO_INCREMENT not NULL PRIMARY KEY,
    score INTEGER (2),
    userID INTEGER,
    FOREIGN KEY(userID) REFERENCES user(userID)
)

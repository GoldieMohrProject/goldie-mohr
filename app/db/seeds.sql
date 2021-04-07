

// insert data direct 


INSERT INTO user (email,password,first_name,last_name,phone_number,picture,token)values ('admin@goldiemohr.com','admin12345678','Me','Admin','(111)111-1111','',123);


// after drop table (bcrypt password)

INSERT INTO user (email,password,first_name,last_name,phone_number,picture,token)values ('admin@goldiemohr.com','$2b$10$26uM9gnhTVqnSBivOacjBeUcKqC4wsvbZ1CofaGBKwj6Q7qfBgifi','Me','Admin','(111)111-1111','',123);




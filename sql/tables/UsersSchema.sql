CREATE TABLE Users(id INT AUTO_INCREMENT, email VARCHAR(100) NOT NULL, password VARCHAR(150) NOT NULL, firstname CHAR(150), lastname CHAR(150), profilePhoto CHAR(150), PRIMARY KEY (id));

 --userInfo

 INSERT INTO Users(firstname, lastname, mobile, email, password, status, createdAt, updatedAt) values("lainel", "dela cruz", "09394242879", "ljbdelacruz123@gmail.com", "johnny05", 1, "2019-01-20", "2019-01-20");

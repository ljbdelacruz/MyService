
--store
CREATE TABLE Stores(id INT AUTO_INCREMENT, name VARCHAR(150) NOT NULL, description VARCHAR(150), storeLogo VARCHAR(150), category_id INT, PRIMARY KEY (id));

--store branches
CREATE TABLE Branches(id INT AUTO_INCREMENT, store_id INT, longitude FLOAT, latitude FLOAT, PRIMARY KEY (id));










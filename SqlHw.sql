CREATE DATABASE bamazon;

USE bamazon;
CREATE TABLE products(
item_id INT NOT NULL AUTO_INCREMENT,
product_name VARCHAR(50), 
department_name VARCHAR(50),
price DECIMAL(10,2) NOT NULL,
stock_quantity INTEGER(10),
PRIMARY KEY (item_id)
);

USE bamazon;
INSERT INTO products (item_id, product_name, department_name, price, stock_quantity) VALUES (1,"shoes", "accessories", 10.00, 20);
SELECT * FROM products;

DELETE FROM products WHERE product_name = "shoes";

DELETE FROM products WHERE item_id = 4;

DROP DATABASE IF EXISTS bamazon;


INSERT INTO products (product_name, department_name, price, stock_quantity) VALUES ("pencil", "supplies", .50, 50);
SELECT * FROM products;

DROP DATABASE IF EXISTS promptitem;
CREATE DATABASE promptItem;

USE bamazon;
CREATE TABLE wantedProduct (
item_id INT(10),
stock_quantity INT(10)
);

SELECT * FROM wantedProduct;





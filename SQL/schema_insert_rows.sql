/* Insert Rows 

A table in a database as a two-dimensional set of rows and columns, with the columns being the properties and the rows being instances of the entity in the table. 

Schema is what describes the structure of each table, and the datatypes that each column of the table can contain.
For example, in our Movies table, the values in the Year column must be an Integer, and the values in the Title column must be a String.
This fixed structure is what allows a database to be efficient, and consistent despite storing millions or even billions of rows.
Can insert multiple rows at a time by just listing them sequentially.


Insert statement with values for all columns
INSERT INTO mytable
VALUES (value_or_expr, another_value_or_expr, …),
       (value_or_expr_2, another_value_or_expr_2, …),
       …;


In case of incomplete data and the table contains columns that support default values, insert rows with only the columns of data you have by specifying them explicitly.
The number of values need to match the number of columns specified.
This ensures forward compatibility. 
Can also insert mathematical and string expressions with the values. 
Insert statement with specific columns
INSERT INTO mytable
(column, another_column, …)
VALUES (value_or_expr, another_value_or_expr, …),
      (value_or_expr_2, another_value_or_expr_2, …),
      …;


Example Insert statement with expressions
INSERT INTO boxoffice
(movie_id, rating, sales_in_millions)
VALUES (1, 9.9, 283742034 / 1000000);
*/


-- Add the studio's new production, Toy Story 4 to the list of movies (you can use any director)
INSERT INTO movies 
VALUES (4, "Toy Story 4", "El Directore", 2015, 90);

--or
INSERT INTO movies 
(Title, Director, Year)
VALUES ("Toy Story 4", "El Directore", 2015);


-- Toy Story 4 has been released to critical acclaim! It had a rating of 8.7, and made 340 million domestically and 270 million internationally. Add the record to the BoxOffice table.
INSERT INTO Boxoffice 
VALUES (15, 8.7, 340000000, 27000000);



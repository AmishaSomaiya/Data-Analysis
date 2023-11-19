/* Multi-table queries with JOINs, Tables: Movies, Boxoffice

Tables that share information about a single entity need to have a primary key that identifies that entity uniquely across the database. 
One common primary key type is an auto-incrementing integer (because they are space efficient), but it can also be a string, hashed value, so long as it is unique.
Using the JOIN clause in a query, we can combine row data across two separate tables using this unique key. 

INNER JOIN
The INNER JOIN is a process that matches rows from the first table and the second table which have the same key (as defined by the ON constraint) to create a result row with the combined columns from both tables.
Select query with INNER JOIN on multiple tables
SELECT column, another_table_column, …
FROM mytable
INNER JOIN another_table 
    ON mytable.id = another_table.id
WHERE condition(s)
ORDER BY column, … ASC/DESC
LIMIT num_limit OFFSET num_offset;

INNER JOIN can also be written simply as a JOIN

*/


-- Find the domestic and international sales for each movie
SELECT Title, Domestic_sales, International_sales 
FROM movies
INNER JOIN Boxoffice  
    ON movies.id = boxoffice.movie_id;


-- Show the sales numbers for each movie that did better internationally rather than domestically
SELECT Title, Domestic_sales, International_sales 
FROM movies
INNER JOIN Boxoffice  
    ON movies.id = boxoffice.movie_id
WHERE International_sales > Domestic_sales;


-- List all the movies by their ratings in descending order
SELECT Title, Rating
FROM movies
INNER JOIN Boxoffice  
    ON movies.id = boxoffice.movie_id
ORDER By Rating DESC;
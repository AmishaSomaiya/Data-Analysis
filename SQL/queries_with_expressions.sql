/*  Queries with expressions 

Select query with expression aliases
SELECT col_expression AS expr_description, …
FROM mytable;

Example query with both column and table name aliases
SELECT column AS better_column_name, …
FROM a_long_widgets_table_name AS mywidgets
INNER JOIN widget_sales
  ON mywidgets.id = widget_sales.widget_id;

*/

-- List all movies and their combined sales in millions of dollars
SELECT title, (domestic_sales + international_sales) / 1000000 AS gross_sales_millions
FROM movies
  JOIN boxoffice
    ON movies.id = boxoffice.movie_id;


-- List all movies and their ratings in percent
SELECT Title, Rating*10 AS Rating_in_percent
FROM movies
JOIN boxoffice 
 on id=movie_id;


 -- List all movies that were released on even number years
SELECT title, year
FROM movies
WHERE year % 2 = 0;
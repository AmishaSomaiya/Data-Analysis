/* Filtering and sorting Query results, Table : movies

Filtering : 
SQL provides a convenient way to discard rows that have a duplicate column value by using the DISTINCT keyword.
However, note that using the DISTINCT keyword alone will blindly remove duplicate rows. 
Discard duplicates based on specific columns using grouping and the GROUP BY clause.

Select query with unique results
SELECT DISTINCT column, another_column, …
FROM mytable
WHERE condition(s);


Sorting :
SQL provides a way to sort your results by a given column in ascending or descending order using the ORDER BY clause.
Select query with ordered results
SELECT column, another_column, …
FROM mytable
WHERE condition(s)
ORDER BY column ASC/DESC;

Limiting results to a subset:
LIMIT and OFFSET clauses are generally done last after the other clauses have been applied. 
Select query with limited rows
SELECT column, another_column, …
FROM mytable
WHERE condition(s)
ORDER BY column ASC/DESC
LIMIT num_limit OFFSET num_offset;

*/

-- List all directors of Pixar movies (alphabetically), without duplicates
SELECT DISTINCT Director 
FROM movies
ORDER BY Director ASC;


-- List the last four Pixar movies released (ordered from most recent to least)
SELECT Title
FROM movies
ORDER BY Year DESC
LIMIT 4;


-- List the first five Pixar movies sorted alphabetically
SELECT Title
FROM movies
ORDER BY Title ASC
LIMIT 5;


-- List the next five Pixar movies sorted alphabetically
SELECT Title
FROM movies
ORDER BY Title ASC
LIMIT 5 OFFSET 5;
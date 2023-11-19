/* Text-specific Queries with Constraints, Table : movies

SQL supports case-insensitive string comparison and wildcard pattern matching for columns containing text data.
All strings must be quoted so that the query parser can distinguish words in the string from SQL keywords.
Use single equals for comparison.
Most database implementations are quite efficient when using these operators.
Full-text search is best left to dedicated libraries like Apache Lucene or Sphinx.

Select query with constraints
SELECT column, another_column, …
FROM mytable
WHERE condition
    AND/OR another_condition
    AND/OR …;

*/

-- Find all the Toy Story movies
SELECT * 
FROM movies
WHERE Title LIKE "%Toy Story%";


-- Find all the movies directed by John Lasseter
SELECT * 
FROM movies
WHERE Director = "John Lasseter";


-- Find all the movies (and director) not directed by John Lasseter
SELECT Title, Director 
FROM movies
WHERE Director != "John Lasseter";


-- Find all the WALL-* movies
SELECT *
FROM movies
WHERE Title LIKE "WALL-_";



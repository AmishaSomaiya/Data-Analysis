/* Queries with Constraints, Table : movies

Select query with constraints
SELECT column, another_column, …
FROM mytable
WHERE condition
    AND/OR another_condition
    AND/OR …;

*/


-- Find the movie with a row id of 6
SELECT Title 
FROM movies
WHERE Id = 6;


-- Find the movies released in the years between 2000 and 2010
SELECT Title 
FROM movies
WHERE Year BETWEEN 2000 AND 2010;



-- Find the movies not released in the years between 2000 and 2010
SELECT Title 
FROM movies
WHERE Year NOT BETWEEN 2000 AND 2010;



-- Find the first 5 Pixar movies and their release year
SELECT Title, Year 
FROM movies
WHERE Id BETWEEN 1 AND 5;

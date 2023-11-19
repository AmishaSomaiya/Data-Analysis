/* SELECT Queries Review,  Table: North_american_cities

SELECT query
SELECT column, another_column, …
FROM mytable
WHERE condition(s)
ORDER BY column ASC/DESC
LIMIT num_limit OFFSET num_offset;
*/


-- List all the Canadian cities and their populations
SELECT City, Population 
FROM north_american_cities
WHERE Country = "Canada";


-- Order all the cities in the United States by their latitude from north to south
--Positive latitudes correspond to the northern hemisphere, and positive longitudes correspond to the eastern hemisphere. Since North America is north of the equator and west of the prime meridian, all of the cities in the list have positive latitudes and negative longitudes.
SELECT city 
FROM north_american_cities
WHERE country = "United States"
ORDER BY latitude DESC;


-- List all the cities west of Chicago, ordered from west to east
SELECT city
FROM north_american_cities
WHERE longitude < -87.629798
ORDER BY longitude ASC;


-- List the two largest cities in Mexico (by population)
SELECT City 
FROM north_american_cities
WHERE Country = "Mexico"
ORDER BY Population DESC
LIMIT 2;


-- List the third and fourth largest cities (by population) in the United States and their population 
SELECT city
FROM north_american_cities
WHERE country LIKE "United States"
ORDER BY population DESC
LIMIT 2 OFFSET 2;



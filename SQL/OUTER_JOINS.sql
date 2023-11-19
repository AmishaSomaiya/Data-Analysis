/* Multi-table queries with JOINs, Tables: Buildings , Employees 

The INNER JOIN might not be sufficient if the resulting table only contains data that belongs in both of the tables.
If the two tables have asymmetric data, which can easily happen when data is entered in different stages, then we would have to use a LEFT JOIN, RIGHT JOIN or FULL JOIN instead to ensure that the data you need is not left out of the results.

Select query with LEFT/RIGHT/FULL JOINs on multiple tables
SELECT column, another_column, …
FROM mytable
INNER/LEFT/RIGHT/FULL JOIN another_table 
    ON mytable.id = another_table.matching_id
WHERE condition(s)
ORDER BY column, … ASC/DESC
LIMIT num_limit OFFSET num_offset;

When joining table A to table B, a LEFT JOIN simply includes rows from A regardless of whether a matching row is found in B. The RIGHT JOIN is the same, but reversed, keeping rows in B regardless of whether a match is found in A. Finally, a FULL JOIN simply means that rows from both tables are kept, regardless of whether a matching row exists in the other table.

*/

-- Find the list of all buildings that have employees
SELECT DISTINCT building FROM employees;


-- Find the list of all buildings and their capacity
SELECT * FROM buildings;

--or
SELECT Building, Capacity 
FROM buildings
LEFT JOIN employees
 ON buildings.Building_name = employees.Building;


-- List all buildings and the distinct employee roles in each building (including empty buildings)
SELECT DISTINCT building_name, role 
FROM buildings 
  LEFT JOIN employees
    ON building_name = building;
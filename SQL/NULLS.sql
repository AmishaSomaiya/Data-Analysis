/* NULLS in sql, Tables : Buildings, Employees

Select query with constraints on NULL values
SELECT column, another_column, …
FROM mytable
WHERE column IS/IS NOT NULL
AND/OR another_condition
AND/OR …;
*/ 

-- Find the name and role of all employees who have not been assigned to a building
SELECT name, role FROM employees
WHERE building IS NULL;


-- Find the names of the buildings that hold no employees
SELECT DISTINCT building_name
FROM buildings 
  LEFT JOIN employees
    ON building_name = building
WHERE role IS NULL;


/* queries with aggregates , table employees 

SQL supports the use of aggregate expressions (or functions) that allow you to summarize information about a group of rows of data. 
With the Pixar database, aggregate functions can be used to answer questions like, "How many movies has Pixar produced?", or "What is the highest grossing Pixar film each year?".
Without a specified grouping, each aggregate function is going to run on the whole set of result rows and return a single value. And like normal expressions, giving aggregate functions an alias ensures that the results will be easier to read and process.

Select query with aggregate functions over all rows
SELECT AGG_FUNC(column_or_expression) AS aggregate_description, …
FROM mytable
WHERE constraint_expression;

Count, min, max, sum, avg

Grouped aggregate functions
In addition to aggregating across all the rows, you can instead apply the aggregate functions to individual groups of data within that group (ie. box office sales for Comedies vs Action movies).
This would then create as many results as there are unique groups defined as by the GROUP BY clause.

The GROUP BY clause works by grouping rows that have the same value in the column specified.

Select query with aggregate functions over groups
SELECT AGG_FUNC(column_or_expression) AS aggregate_description, …
FROM mytable
WHERE constraint_expression
GROUP BY column;

---

HAVING clause is used specifically with the GROUP BY clause to allow us to filter grouped rows from the result set.

Select query with HAVING constraint
SELECT group_by_column, AGG_FUNC(column_expression) AS aggregate_result_alias, …
FROM mytable
WHERE condition
GROUP BY column
HAVING group_condition;

The HAVING clause constraints are written the same way as the WHERE clause constraints, and are applied to the grouped rows.
Having : to be used only when group by used, else where is sufficient.

*/


-- Find the longest time that an employee has been at the studio
SELECT MAX(years_employed) as Max_years_employed
FROM employees;


-- For each role, find the average number of years employed by employees in that role
SELECT Role, AVG(years_employed) as Avg_years_employed
FROM employees
GROUP BY Role;


-- Find the total number of employee years worked in each building
SELECT Building, Sum(Years_employed) as Total_Number_of_Employee_Years
FROM employees
GROUP BY Building;


-- Find the number of Artists in the studio (without a HAVING clause)
SELECT role, COUNT(*) as Number_of_artists
FROM employees
WHERE role = "Artist";


-- Find the number of Employees of each role in the studio
SELECT role, COUNT(*)
FROM employees
GROUP BY role;


-- Find the total number of years employed by all Engineers
SELECT role, SUM(years_employed)
FROM employees
GROUP BY role
HAVING role = "Engineer";
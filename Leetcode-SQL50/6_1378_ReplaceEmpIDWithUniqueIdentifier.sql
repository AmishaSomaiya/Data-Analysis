/*

EASY - BASIC JOINS 

https://leetcode.com/problems/replace-employee-id-with-the-unique-identifier/description/?envType=study-plan-v2&envId=top-sql-50

Table: Employees

+---------------+---------+
| Column Name   | Type    |     
+---------------+---------+
| id            | int     |
| name          | varchar |
+---------------+---------+
id is the primary key (column with unique values) for this table.
Each row of this table contains the id and the name of an employee in a company.
 

Table: EmployeeUNI

+---------------+---------+
| Column Name   | Type    |
+---------------+---------+
| id            | int     |
| unique_id     | int     |
+---------------+---------+
(id, unique_id) is the primary key (combination of columns with unique values) for this table.
Each row of this table contains the id and the corresponding unique id of an employee in the company.
 

Write a solution to show the unique ID of each user, If a user does not have a unique ID replace just show null.

Return the result table in any order.

Notes : 
- We need to print id as null if id not present for a particular name
- This can be easily achieved using left join on the Employee table since it contains names
- This will ensure that all names are printed in the output and if a name does not have a corresponding 
  id then it will automatically print null as the unique id for it. 
- Also note that implicit join with e.id = eu.id will not work for this case because this will not 
  consider the cases where the name does not have a corresponding id in the eu table. 

*/


SELECT eu.unique_id AS unique_id, e.name AS name
FROM Employees e LEFT JOIN EmployeeUNI eu 
ON e.id = eu.id; 


/*
https://leetcode.com/problems/find-customer-referee/description/?envType=study-plan-v2&envId=top-sql-50

Table: Customer
+-------------+---------+
| Column Name | Type    |
+-------------+---------+
| id          | int     |
| name        | varchar |
| referee_id  | int     |
+-------------+---------+

In SQL, id is the primary key column for this table.
Each row of this table indicates the id of a customer, their name, and the id of the customer who referred them.
Find the names of the customer that are not referred by the customer with id = 2.
Return the result table in any order.

EASY

LOGIC:
1. We need to return names not referred by 2 
   i.e. all names that don't have referee_id = 2 
   i.e. also include names with referee_id NULL (not referred by anyone) in the result
2. method 1 : 1137 ms
   we check if !=2 or = Null and return = solution 1 
   but this is not efficient because it checks for null values separately i.e. for every referee_id it
   does 2 comparisons first if !=2 it will return that name but if this condition is not met it will again check
   if null
3. method 2 : 825 ms 
   avoid 2 comparisons but having single comparison of all referee_ids with !=2 i.e. <> 2 
   and null handling is implicit, i.e. if null then replace with 0 and then compare
   now single comparison with 2 so a lot more efficient


*/

-- Solution 1
SELECT name
FROM Customer
WHERE referee_id != 2 
OR referee_id IS NULL;


-- Solution 2 : more efficient 
SELECT name
FROM Customer
WHERE IFNULL(referee_id,0) <> 2;


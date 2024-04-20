/*

EASY BASIC JOINS

Table: Visits

+-------------+---------+
| Column Name | Type    |
+-------------+---------+
| visit_id    | int     |
| customer_id | int     |
+-------------+---------+
visit_id is the column with unique values for this table.
This table contains information about the customers who visited the mall.
 

Table: Transactions

+----------------+---------+
| Column Name    | Type    |
+----------------+---------+
| transaction_id | int     |
| visit_id       | int     |
| amount         | int     |
+----------------+---------+
transaction_id is column with unique values for this table.
This table contains information about the transactions made during the visit_id.
 

Write a solution to find the IDs of the users who visited without making any transactions and the number of times they made these types of visits.

Return the result table sorted in any order.

Notes:
F From tables Visits and Transactions with left join on Visits because we need all customer_ids that did not make the purchase
W where customer did not make the purchase ie transaction id is null
G to find count of visits for each customer, group by customer id
H -
O -
S customer id and count of visits

*/

SELECT v.customer_id, COUNT(v.visit_id) AS count_no_trans 
FROM Visits AS v LEFT JOIN Transactions as t
ON v.visit_id = t.visit_id 
WHERE t.transaction_id is NULL
GROUP BY v.customer_id;
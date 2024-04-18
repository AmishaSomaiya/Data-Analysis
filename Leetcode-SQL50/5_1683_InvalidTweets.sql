/*

EASY - SELECT 
Table: Tweets 

+----------------+---------+
| Column Name    | Type    |
+----------------+---------+
| tweet_id       | int     |
| content        | varchar |
+----------------+---------+
tweet_id is the primary key (column with unique values) for this table.
This table contains all the tweets in a social media app.
 

Write a solution to find the IDs of the invalid tweets. The tweet is invalid if the number of characters used in the content of the tweet is strictly greater than 15.

Return the result table in any order.

Notes :
- We need to check length of contents field i.e. the number of characters used in the content field 
- Thus, use CHAR_LENGTH() which returns the length of the string measured in characters
- Cannot use LENGTH() which returns the length of the string measured in bytes

References : 
https://stackoverflow.com/questions/1734334/mysql-length-vs-char-length?rq=1 and
https://leetcode.com/problems/invalid-tweets/solutions/968440/mysql-length-is-incorrect-important-difference-between-char-length-vs-length/?envType=study-plan-v2&envId=top-sql-50 

*/

SELECT tweet_id
FROM Tweets
WHERE CHAR_LENGTH(content) > 15;
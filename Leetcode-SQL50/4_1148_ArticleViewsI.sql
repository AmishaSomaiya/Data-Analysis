/*
EASY - SELECT 
Table: Views 

+---------------+---------+
| Column Name   | Type    |
+---------------+---------+
| article_id    | int     |
| author_id     | int     |
| viewer_id     | int     |
| view_date     | date    |
+---------------+---------+
There is no primary key (column with unique values) for this table, the table may have duplicate rows.
Each row of this table indicates that some viewer viewed an article (written by some author) on some date. 
Note that equal author_id and viewer_id indicate the same person.
 

Write a solution to find all the authors that viewed at least one of their own articles.

Return the result table sorted by id in ascending order.

Notes:
- Since the table may have duplicate rows, use DISTINCT to return unique authors
- The sample output shows id as the column name so rename output column as id
- Sort resulting table by id in ascending order using ORDER BY
  (here ASC is optional since by default ORDER BY sorts in ascending order)

*/

SELECT DISTINCT author_id as id
FROM Views
WHERE author_id = viewer_id
ORDER BY id ASC;
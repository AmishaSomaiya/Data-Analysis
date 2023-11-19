/* delete rows, table  movies

Delete statement with condition
DELETE FROM mytable
WHERE condition;

If you decide to leave out the WHERE constraint, then all rows are removed, which is a quick and easy way to clear out a table completely (if intentional).

Run the constraint in a SELECT query first to ensure that you are removing the right rows. Without a proper backup or test database, it is downright easy to irrevocably remove data, so always read your DELETE statements twice and execute once.

*/

-- This database is getting too big, lets remove all movies that were released before 2005.
DELETE FROM Movies
WHERE Year < 2005;


-- Andrew Stanton has also left the studio, so please remove all movies directed by him
DELETE FROM Movies
WHERE Director = "Andrew Stanton";

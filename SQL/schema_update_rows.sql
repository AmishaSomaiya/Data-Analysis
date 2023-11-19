/* update rows Table, movies

In addition to adding new data, a common task is to update existing data, which can be done using an UPDATE statement. Similar to the INSERT statement, you have to specify exactly which table, columns, and rows to update. In addition, the data you are updating has to match the data type of the columns in the table schema.
The statement works by taking multiple column/value pairs, and applying those changes to each and every row that satisfies the constraint in the WHERE clause.

Always write the constraint first and test it in a SELECT query to make sure you are updating the right rows, and only then writing the column/value pairs to update.

Update statement with values
UPDATE mytable
SET column = value_or_expr, 
    other_column = another_value_or_expr, 
    …
WHERE condition;


*/

-- The director for A Bug's Life is incorrect, it was actually directed by John Lasseter
UPDATE movies
SET Director = "John Lasseter"
WHERE Title = "A Bug's Life";


-- The year that Toy Story 2 was released is incorrect, it was actually released in 1999
UPDATE movies
SET Year = 1999
WHERE Title = "Toy Story 2";


-- Both the title and director for Toy Story 8 is incorrect! The title should be "Toy Story 3" and it was directed by Lee Unkrich
UPDATE movies
SET Title = "Toy Story 3",
    Director = "Lee Unkrich"
WHERE Title = "Toy Story 8";



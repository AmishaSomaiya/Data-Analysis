/* Altering tables, table Movies  

ALTER TABLE statement to add, remove, or modify columns and table constraints.
Altering table to add new column(s)
ALTER TABLE mytable
ADD column DataType OptionalTableConstraint 
    DEFAULT default_value;

Altering table to remove column(s)
ALTER TABLE mytable
DROP column_to_be_deleted;

Altering table name
ALTER TABLE mytable
RENAME TO new_table_name;

*/

-- Add a column named Aspect_ratio with a FLOAT data type to store the aspect-ratio each movie was released in.
ALTER TABLE Movies
ADD Aspect_Ratio FLOAT; 


-- Add another column named Language with a TEXT data type to store the language that the movie was released in. Ensure that the default for this language is English.
ALTER TABLE Movies
ADD Language TEXT
    DEFAULT  English; 
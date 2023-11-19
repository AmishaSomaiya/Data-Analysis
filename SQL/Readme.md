

## Summary of SELECT Queries and Schema : 

## Queries

### Complete SELECT query
```
SELECT DISTINCT column, AGG_FUNC(column_or_expression), …
FROM mytable
    JOIN another_table
      ON mytable.column = another_table.column
    WHERE constraint_expression
    GROUP BY column
    HAVING constraint_expression
    ORDER BY column ASC/DESC
    LIMIT count OFFSET COUNT;
```


### Query order of execution
1. FROM and JOINS
2. WHERE
3. GROUP BY
4. HAVING
5. SELECT
6. DISTINCT
7. ORDER BY
8. LIMIT / OFFSET


# SCHEMA
### Insert, update or delete rows
```
INSERT INTO mytable
(column, another_column, …)
VALUES (value_or_expr, another_value_or_expr, …),
      (value_or_expr_2, another_value_or_expr_2, …),
      …;
```



-- Update statement with values
```
UPDATE mytable
SET column = value_or_expr, 
    other_column = another_value_or_expr, 
    …
WHERE condition;
```



-- Delete statement with condition
```
DELETE FROM mytable
WHERE condition;
```


### Tables : create, update or drop
-- create table
```
CREATE TABLE IF NOT EXISTS mytable (
    column DataType TableConstraint DEFAULT default_value,
    another_column DataType TableConstraint DEFAULT default_value,
    …
);
```


--create table example 
```
CREATE TABLE movies (
    id INTEGER PRIMARY KEY,
    title TEXT,
    director TEXT,
    year INTEGER, 
    length_minutes INTEGER
);
```



-- ALTER TABLE statement to add, remove, or modify columns and table constraints.
-- Altering table to add new column(s)
```
ALTER TABLE mytable
ADD column DataType OptionalTableConstraint 
    DEFAULT default_value;
```


-- Altering table to remove column(s)
```
ALTER TABLE mytable
DROP column_to_be_deleted;
```


-- Altering table name
```
ALTER TABLE mytable
RENAME TO new_table_name;
```


-- Drop table statement
```
DROP TABLE IF EXISTS mytable;
```

### Reference : 

Interactive learning and exercises by sqlbolt.com









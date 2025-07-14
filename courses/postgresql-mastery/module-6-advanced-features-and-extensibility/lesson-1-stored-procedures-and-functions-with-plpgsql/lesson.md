---
title: "Lesson 1: Stored Procedures and Functions with PL/pgSQL"
objective: "To write procedural code that executes directly within the database for performance and reusability."
video: "https://www.youtube.com/embed/BA7vB1i_n_k"
---

### Topics

- CREATE FUNCTION syntax.
- Introduction to PL/pgSQL: Variables, control structures (IF, LOOP).
- Returning values and tables from functions.

### Example (A function to get a user's full name)

```sql
CREATE FUNCTION get_full_name(user_id INT) RETURNS TEXT AS $$
DECLARE
    full_name TEXT;
BEGIN
    SELECT first_name || ' ' || last_name INTO full_name FROM users WHERE id = user_id;
    RETURN full_name;
END;
$$ LANGUAGE plpgsql;
```

### Practice Problem

Create a function that calculates the total revenue for a given product ID.

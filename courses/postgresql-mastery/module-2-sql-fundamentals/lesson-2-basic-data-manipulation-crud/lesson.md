---
title: "Lesson 2: Basic Data Manipulation (CRUD)"
objective: "To learn how to insert, select, update, and delete data from your tables."
video: "https://www.youtube.com/embed/M-G_p24qYgY"
---

### Topics

- INSERT INTO: Adding new rows to a table.
- SELECT: Querying data from a table.
- UPDATE: Modifying existing rows.
- DELETE FROM: Removing rows.

### Example (CRUD operations)

```sql
-- Create
INSERT INTO users (username, email) VALUES ('alice', 'alice@example.com');

-- Read
SELECT id, username, email FROM users;

-- Update
UPDATE users SET username = 'alice_in_wonderland' WHERE id = 1;

-- Delete
DELETE FROM users WHERE username = 'alice_in_wonderland';
```

### Practice Problem

Insert two new products into your products table. Then, update the price of one of them. Finally, select all products to view your changes.

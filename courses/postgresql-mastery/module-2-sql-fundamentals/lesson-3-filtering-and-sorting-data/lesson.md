---
title: "Lesson 3: Filtering and Sorting Data"
objective: "To refine queries to retrieve specific subsets of data in a desired order."
video: "https://www.youtube.com/embed/Wz1h8_k1I6g"
---

### Topics

- The WHERE clause for filtering.
- Operators: =, !=, >, <, >=, <=.
- Combining conditions with AND and OR.
- IN, BETWEEN, LIKE (for pattern matching), IS NULL.
- ORDER BY for sorting (ASC, DESC).
- LIMIT and OFFSET for pagination.

### Example (Filtering and Sorting)

```sql
-- Select users whose username starts with 'a', and order them by creation date
SELECT username, email, created_at
FROM users
WHERE username LIKE 'a%'
ORDER BY created_at DESC
LIMIT 10;
```

### Practice Problem

From your products table, select all products that are in stock and have a price greater than 50.00, ordered from most expensive to least expensive.

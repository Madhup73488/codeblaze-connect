---
title: "Lesson 1: Joins"
objective: "To combine rows from two or more tables based on a related column between them."
video: "https://www.youtube.com/embed/2HATHP2_O9c"
---

### Topics

- INNER JOIN: Returns records that have matching values in both tables.
- LEFT JOIN (or LEFT OUTER JOIN): Returns all records from the left table, and the matched records from the right table.
- RIGHT JOIN and FULL OUTER JOIN.
- Using aliases for table names.

### Example (Joining users and orders)

```sql
SELECT users.username, orders.order_date, orders.total
FROM users
INNER JOIN orders ON users.id = orders.user_id;
```

### Practice Problem

Imagine you have a posts table and a comments table, where each comment has a post_id. Write a query to retrieve all posts along with a count of how many comments each post has.

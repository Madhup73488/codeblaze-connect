---
title: "Lesson 2: Views and Materialized Views"
objective: "To simplify complex queries and improve performance by creating virtual tables."
video: "https://www.youtube.com/embed/hxj2tG-e1y8"
---

### Topics

- CREATE VIEW: Creating a virtual table based on a SELECT query.
- CREATE MATERIALIZED VIEW: Storing the result of a query physically for faster access.
- Refreshing materialized views.

### Example (A view for active users)

```sql
CREATE VIEW active_users AS
SELECT id, username, email
FROM users
WHERE last_login > NOW() - INTERVAL '30 days';
```

### Practice Problem

Create a materialized view that stores a summary of daily sales totals. How would you keep this view up-to-date?

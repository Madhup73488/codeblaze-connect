---
title: "Lesson 2: Understanding Query Performance with EXPLAIN"
objective: "To learn how to analyze PostgreSQL's query execution plans to identify performance bottlenecks."
video: "https://www.youtube.com/embed/m__bSg72n7k"
---

### Topics

- The EXPLAIN command.
- The EXPLAIN ANALYZE command to get actual execution times.
- Reading a query plan: Costs, rows, and plan nodes (e.g., Seq Scan, Index Scan).

### Example (Using EXPLAIN)

```sql
EXPLAIN ANALYZE SELECT * FROM users WHERE id = 123;
```
(The output will show whether PostgreSQL used an Index Scan or a Sequential Scan)

### Practice Problem

Run EXPLAIN on a query that filters a large table by a non-indexed column. Then, create an index on that column and run EXPLAIN again. Compare the query plans.

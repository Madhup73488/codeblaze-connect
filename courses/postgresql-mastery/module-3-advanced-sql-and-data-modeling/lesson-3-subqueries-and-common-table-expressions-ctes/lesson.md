---
title: "Lesson 3: Subqueries and Common Table Expressions (CTEs)"
objective: "To write more complex, readable queries by nesting queries or using temporary named result sets."
video: "https://www.youtube.com/embed/e6924T2_omI"
---

### Topics

- Subqueries in SELECT, FROM, and WHERE clauses.
- Correlated vs. non-correlated subqueries.
- Common Table Expressions (CTEs) using the WITH clause.
- Recursive CTEs.

### Example (Using a CTE)

```sql
WITH regional_sales AS (
    SELECT region, SUM(amount) AS total_sales
    FROM orders
    GROUP BY region
)
SELECT region, total_sales
FROM regional_sales
WHERE total_sales > (SELECT AVG(total_sales) FROM regional_sales);
```

### Practice Problem

Write a query to find all employees who earn more than the average salary of their department. Use a subquery to calculate the average salary for each department.

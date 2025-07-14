---
title: "Lesson 2: Aggregation and Grouping"
objective: "To perform calculations on sets of rows and group data for summary reports."
video: "https://www.youtube.com/embed/yuvk9o-j-AU"
---

### Topics

- Aggregate Functions: COUNT(), SUM(), AVG(), MIN(), MAX().
- The GROUP BY clause.
- The HAVING clause for filtering groups.

### Example (Number of orders per customer)

```sql
SELECT user_id, COUNT(id) AS number_of_orders
FROM orders
GROUP BY user_id
HAVING COUNT(id) > 5; -- Only show customers with more than 5 orders
```

### Practice Problem

Using a products table with a category column, write a query to find the average price of products in each category.

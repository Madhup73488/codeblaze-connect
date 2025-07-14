---
title: "Lesson 1: Merging and Joining"
objective: "To combine multiple DataFrames based on common columns or indices."
video: "https://www.youtube.com/embed/iWzddY3tF9U"
---

### Topics

- pd.concat() for stacking DataFrames vertically or horizontally.
- pd.merge() for SQL-style joins (inner, outer, left, right).
- Key parameters: on, left_on, right_on, how.

### Example (A simple merge)

```python
df1 = pd.DataFrame({'employee': ['Bob', 'Jake', 'Lisa'], 'group': ['Accounting', 'Engineering', 'HR']})
df2 = pd.DataFrame({'employee': ['Lisa', 'Bob', 'Jake'], 'hire_date': [2004, 2008, 2012]})

# Merge the two DataFrames on the 'employee' column
df_merged = pd.merge(df1, df2)
print(df_merged)
```

### Practice Problem

Create two DataFrames. One with product_id and product_name. The second with product_id and price. Perform a merge to create a new DataFrame that contains the name and price for each product.

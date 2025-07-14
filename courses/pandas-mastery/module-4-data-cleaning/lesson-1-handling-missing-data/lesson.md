---
title: "Lesson 1: Handling Missing Data"
objective: "To find and handle missing values (NaN) in your DataFrame."
video: "https://www.youtube.com/embed/EaGbS7eWSs0"
---

### Topics

- Identifying missing values with .isnull() and .sum().
- Dropping missing values with .dropna().
- Filling missing values with .fillna() (e.g., with a mean, median, or constant).

### Example (Filling missing ages)

```python
# Calculate the median age
median_age = df['Age'].median()

# Fill missing 'Age' values with the median
df['Age'].fillna(median_age, inplace=True)
```

### Practice Problem

The 'Cabin' column in the Titanic dataset has many missing values. Write the code to drop this column entirely from the DataFrame.

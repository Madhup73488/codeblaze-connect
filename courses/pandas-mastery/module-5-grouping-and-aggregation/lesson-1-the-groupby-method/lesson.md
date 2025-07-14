---
title: "Lesson 1: The groupby() Method"
objective: "To group a DataFrame by one or more columns and perform aggregate calculations."
video: "https://www.youtube.com/embed/qy0fDqoMJx8"
---

### Topics

- The Split-Apply-Combine strategy.
- The groupby() operation.
- Applying aggregate functions: .sum(), .mean(), .count(), .size().
- The .agg() method for applying multiple aggregations.

### Example (Grouping by class and calculating mean age)

```python
# Calculate the average age for each passenger class
avg_age_by_class = df.groupby('Pclass')['Age'].mean()
print(avg_age_by_class)
```

### Practice Problem

Using the Titanic dataset, calculate the survival rate for each sex. (Hint: The 'Survived' column is 0 for died and 1 for survived, so the mean of this column is the survival rate).

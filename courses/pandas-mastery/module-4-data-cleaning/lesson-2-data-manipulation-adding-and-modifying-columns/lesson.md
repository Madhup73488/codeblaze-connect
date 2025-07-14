---
title: "Lesson 2: Data Manipulation: Adding and Modifying Columns"
objective: "To create new columns and modify existing ones."
video: "https://www.youtube.com/embed/hmy14o3-i9o"
---

### Topics

- Creating a new column from an existing one.
- Using .apply() to apply a function to a column.
- Using .astype() to change a column's data type.
- Renaming columns with .rename().

### Example (Creating a new column)

```python
# Create a new column 'FamilySize'
df['FamilySize'] = df['SibSp'] + df['Parch'] + 1
```

### Practice Problem

Create a new column in the Titanic dataset called IsAdult which is True if the passenger's age is 18 or over, and False otherwise.

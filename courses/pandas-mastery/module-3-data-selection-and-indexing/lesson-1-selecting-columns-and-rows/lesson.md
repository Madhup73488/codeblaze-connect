---
title: "Lesson 1: Selecting Columns and Rows"
objective: "To select specific columns and rows from a DataFrame."
video: "https://www.youtube.com/embed/xvpNA7bC8cs"
---

### Topics

- Selecting a single column (df['ColumnName']).
- Selecting multiple columns (df[['Col1', 'Col2']]).
- Introduction to .loc (label-based selection) and .iloc (integer position-based selection).

### Example (Selection)

```python
# Select the 'Age' column (returns a Series)
ages = df['Age']

# Select 'Age' and 'Fare' columns (returns a DataFrame)
subset = df[['Age', 'Fare']]

# Select the first row using iloc
first_row = df.iloc[0]
```

### Practice Problem

Using the Titanic dataset, select the Name, Sex, and Survived columns for the first 10 rows.

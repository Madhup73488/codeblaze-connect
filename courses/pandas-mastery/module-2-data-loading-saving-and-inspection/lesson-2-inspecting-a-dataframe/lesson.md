---
title: "Lesson 2: Inspecting a DataFrame"
objective: "To get a high-level overview of your data's structure and content."
video: "https://www.youtube.com/embed/zN2z-Yj2T-A"
---

### Topics

- .head() and .tail() to view the first/last rows.
- .info() to see data types and non-null counts.
- .describe() for a statistical summary of numerical columns.
- .shape to get the dimensions (rows, columns).
- .columns and .index to view labels.

### Example (Inspecting data)

```python
# See the first 5 rows
print(df.head())

# Get a summary of the DataFrame
print(df.info())

# Get statistical info
print(df.describe())
```

### Practice Problem

Load the Titanic dataset (available in many online tutorials). Use the inspection methods to answer the following: 1. How many rows and columns are there? 2. What is the average age of the passengers? 3. How many missing values are there in the 'Age' column?

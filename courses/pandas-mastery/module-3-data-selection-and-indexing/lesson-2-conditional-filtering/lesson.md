---
title: "Lesson 2: Conditional Filtering"
objective: "To filter a DataFrame based on logical conditions."
video: "https://www.youtube.com/embed/Lw2rlcxScZY"
---

### Topics

- Boolean indexing (df[df['Age'] > 18]).
- Combining conditions with & (and), | (or), and ~ (not).
- Using .isin() for filtering by multiple values.

### Example (Conditional Filtering)

```python
# Select all passengers older than 30
adults = df[df['Age'] > 30]

# Select all first-class passengers who survived
survived_first_class = df[(df['Pclass'] == 1) & (df['Survived'] == 1)]
```

### Practice Problem

Using the Titanic dataset, find all the female passengers who were in 3rd class and survived.

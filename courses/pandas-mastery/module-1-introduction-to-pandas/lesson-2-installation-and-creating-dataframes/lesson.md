---
title: "Lesson 2: Installation and Creating DataFrames"
objective: "To install pandas and learn how to create Series and DataFrame objects from scratch."
video: "https://www.youtube.com/embed/zmdjNSmRXF4"
---

### Topics

- Installing pandas (pip install pandas).
- Creating a Series from a list.
- Creating a DataFrame from a dictionary of lists.
- Creating a DataFrame from a list of dictionaries.

### Example (Creating a DataFrame)

```python
import pandas as pd

# From a dictionary
data = {
    'Name': ['Alice', 'Bob', 'Charlie'],
    'Age': [25, 30, 35],
    'City': ['New York', 'Los Angeles', 'Chicago']
}
df = pd.DataFrame(data)
print(df)
```

### Practice Problem

Create a pandas DataFrame to represent a list of products. It should have columns for product_name (string), price (float), and in_stock (boolean).

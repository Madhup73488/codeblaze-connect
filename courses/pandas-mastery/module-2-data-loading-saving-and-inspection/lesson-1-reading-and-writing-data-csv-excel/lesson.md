---
title: "Lesson 1: Reading and Writing Data (CSV, Excel)"
objective: "To load data from common file formats into a DataFrame and save a DataFrame to a file."
video: "https://www.youtube.com/embed/N6hyN6BW6ao"
---

### Topics

- Reading CSV files with pd.read_csv().
- Reading Excel files with pd.read_excel().
- Important parameters (sep, header, index_col).
- Writing DataFrames to files with .to_csv() and .to_excel().

### Example (Reading a CSV)

```python
import pandas as pd

# Assuming 'titanic.csv' is in the same directory
df = pd.read_csv('titanic.csv')
```

### Practice Problem

Find a simple CSV dataset online (e.g., from Kaggle or data.gov). Download it and write a Python script to load it into a pandas DataFrame.

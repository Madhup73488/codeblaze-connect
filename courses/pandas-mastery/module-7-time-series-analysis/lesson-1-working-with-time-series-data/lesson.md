---
title: "Lesson 1: Working with Time Series Data"
objective: "To effectively work with date and time data in pandas."
video: "https://www.youtube.com/embed/ystk-tARy_E"
---

### Topics

- The datetime data type.
- Converting columns to datetime with pd.to_datetime().
- Setting a datetime column as the index.
- Time-based indexing and slicing.
- Resampling data to different time frequencies (e.g., from daily to monthly).

### Example (Resampling)

```python
# Assuming 'df' has a datetime index
# Calculate the monthly average of the 'Close' price
monthly_avg = df['Close'].resample('M').mean()
```

### Practice Problem

Create a simple DataFrame with daily data for one week. Set the date column as the index. Then, select all data from a specific 3-day period.

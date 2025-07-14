---
title: "Lesson 1: Basic Plotting with pandas"
objective: "To use the built-in plotting capabilities of pandas for quick visualizations."
video: "https://www.youtube.com/embed/0P7QnIQDBJY"
---

### Topics

- The .plot() accessor.
- Creating different kinds of plots: line, bar, hist, scatter.
- Basic plot customization (title, xlabel, ylabel).
- Integration with Matplotlib.

### Example (A simple line plot)

```python
# Plot the 'Fare' distribution as a histogram
df['Fare'].plot(kind='hist', bins=30, title='Fare Distribution')
```

### Practice Problem

Using the Titanic dataset, create a bar chart showing the number of people in each passenger class (Pclass).

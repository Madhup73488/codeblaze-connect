---
title: "Lesson 1: Lists"
objective: "To use lists to store ordered, mutable collections of items."
video: "https://www.youtube.com/embed/ohCDwsF1wI4"
---

### Topics

- Creating lists.
- Indexing and slicing.
- Modifying lists: .append(), .insert(), .pop(), .remove().
- Sorting with .sort() and sorted().

### Example (List operations)

```python
fruits = ["apple", "banana", "cherry"]
fruits.append("orange") # Adds "orange" to the end
print(fruits[1]) # Output: banana
fruits[0] = "apricot" # Change the first item
print(f"We have {len(fruits)} fruits.")
```

### Practice Problem

Create a list of your top 3 favorite movies. Add a fourth movie to the end of the list. Then, replace the movie at index 1 with a new one. Finally, print the entire list.

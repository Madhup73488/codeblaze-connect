---
title: "Lesson 1: Working with Files"
objective: "To read from and write to text files."
video: "https://www.youtube.com/embed/Uh2ebFW8O8M"
---

### Topics

- The open() function and file modes ('r', 'w', 'a').
- Using the with statement for automatic file closing.
- Reading entire files, lines, and iterating.

### Example (Reading and writing)

```python
# Writing to a file
with open("greeting.txt", "w") as f:
    f.write("Hello, file system!")

# Reading from a file
with open("greeting.txt", "r") as f:
    content = f.read()
    print(content)
```

### Practice Problem

Write a script that prompts the user for their name and then appends their name to a file called guests.txt.

---
title: "Lesson 2: Dictionaries"
objective: "To use dictionaries to store key-value pairs, allowing for fast lookups."
video: "https://www.youtube.com/embed/daefaLgNkw0"
---

### Topics

- Creating dictionaries.
- Accessing values using keys.
- Adding, updating, and deleting key-value pairs.
- Iterating over keys, values, and items (.keys(), .values(), .items()).

### Example (A user dictionary)

```python
user = {
    "username": "jdoe",
    "email": "john.doe@example.com",
    "posts": 15
}

print(user["email"]) # Access a value by its key
user["is_admin"] = False # Add a new key-value pair
print(user)
```

### Practice Problem

Create a dictionary to represent a car. It should have keys for make, model, and year. Print the model of the car. Then, add a new key color with a value of your choice and print the entire dictionary.

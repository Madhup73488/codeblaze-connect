---
title: "Lesson 1: Classes and Objects"
objective: "To understand the basics of OOP by defining classes and creating objects (instances)."
video: "https://www.youtube.com/embed/JezEbPKBf48"
---

### Topics

- The class keyword.
- The __init__ method (the constructor).
- Instance attributes (data belonging to an object).
- Instance methods (functions belonging to an object).

### Example (A simple Dog class)

```python
class Dog:
    def __init__(self, name, age):
        self.name = name
        self.age = age

    def bark(self):
        return "Woof!"

# Create an instance (object) of the Dog class
my_dog = Dog("Buddy", 3)
print(f"{my_dog.name} is {my_dog.age} years old.")
print(my_dog.bark())
```

### Practice Problem

Create a Car class. The __init__ method should take make, model, and year as arguments. Create an instance of your Car class and print its attributes.
